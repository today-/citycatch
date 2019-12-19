export function debounce<T extends any>(fn: T, time: number): T {
  let timer: NodeJS.Timer = null;

  function call(args: any) {
    timer = setTimeout(() => {
      fn.apply(fn, args);
      timer = null;
    }, time);
  }

  function run() {
    if (!timer) {
      call(arguments);
    } else {
      clearTimeout(timer);
      call(arguments);
    }
  }

  run.cancel = () => {
    clearTimeout(timer);
    timer = null;
  };

  return run as any as T;
}
