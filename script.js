console.log('Started script execution');
performance.mark('script-start');

function fib(x) {
  if (x <= 0) {
		return 0;
	}
  if (x == 1) {
		return 1;
	}
  return fib(x-1) + fib(x-2);
}
fib(41);

performance.mark('script-end');
performance.measure('script-run', 'script-start', 'script-end');
console.log('Finished script execution');
