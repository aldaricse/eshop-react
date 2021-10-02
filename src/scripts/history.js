import { createBrowserHistory } from 'history';

const history= createBrowserHistory({
  /* pass a configuration object here if needed */
});


history.listen((location, action) => {
	window.scrollTo(0, 0);
  // console.log(
  //   `The current URL is ${location.pathname}${location.search}${location.hash}`
  // );
  // console.log(`The last navigation action was ${action}`);
});

export default history;


// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
// export default history;