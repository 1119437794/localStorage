// 对localStorage封装，方便使用
// ⚠️ 不能存储function类型
((window) => {
  const storage = window.localStorage;
  if (!storage) {
    // eslint-disable-next-line
    console.log('This browser does not support localStorage');
    return;
  }
  function serialize(value) {
    return JSON.stringify({ value });
  }
  function deserialize(value) {
    try {
      return JSON.parse(value).value;
    } catch (error) {
      // eslint-disable-next-line
      console.warn(`caught an error ${error}`);
      return value;
    }
  }
  const wrappedNativeMehotds = {
    setItem(key, value) {
      this.setItem(key, serialize(value));
    },
    getItem(key) {
      return deserialize(this.getItem(key));
    },
    removeItem(key) {
      this.removeItem(key);
    },
    clear() {
      this.clear();
    }
  };

  // 重定义localStorage
  Object.defineProperty(window, 'localStorage', {
    value: (
      new Proxy(
        storage,
        {
          get(target, prop) {
            const result = target[prop];
            if (typeof result === 'function') {
              const methodName = result.name;
              return wrappedNativeMehotds[methodName].bind(storage);
            }
            return deserialize(result);
          },
          set(target, prop, value) {
            target[prop] = serialize(value);
            return true;
          },
        }
      )
    ),
    writable: false,
    configurable: false
  });
})(window);
