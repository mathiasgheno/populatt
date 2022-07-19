import React from 'react';

const getBrowserRoute = () => window.location.hash.split('?')[0] || '#/home';

const getQuery = () => window.location.hash.split('?')[1];

export const matchWith = (route) => (...paths) => {
  return paths.some(path => {
    const haveSameSize = path.split('/').length === route.split('/').length;
    if(!haveSameSize) return false;
    const haveParameter = path.includes(':');
    if(haveParameter) {
      const allElementsOfRoute = path.split('/');
      console.log(allElementsOfRoute);
      return allElementsOfRoute.every((element, index) => {
        if(element.includes(':')) {
          return true;
        }
        return element === route.split('/')[index];
      })
    }
    return path === route;
  });
}

/**
 * @description I'm usuming that the system router and the browser router are the same.
 * @param route
 */
export const getParams = (route = getBrowserRoute()) => (path) => {
  // const validator = ducto(
  //   hasSameType,
  //   hasSameLength,
  //   isNotUndefined,
  //   isNotNull,
  //   isNotEmpty,
  // )
  // validator(route, path);

  if(!route) return {};
  if(!path) return {};

  const allElementsOfRoute = route?.split?.('/');
  const allElementsOfPath = path?.split?.('/');
  return allElementsOfPath?.reduce((acc, subpath, index) => {
    if(subpath.includes(':')) {
      const paramName = subpath.replace(':', '');
      acc[paramName] = allElementsOfRoute[index];
    }
    return acc;
  }, {});
};

export const useHashedRouter = () => {
  const [ route, setRoute ] = React.useState(getBrowserRoute());
  const [ query, setQuery ] = React.useState(getQuery());
  const [ params, setParams ] = React.useState(getParams());

  const handleRouteChanges = () => {
    const route = getBrowserRoute();
    const query = getQuery();
    const params = getParams(route);
    setQuery(query);
    setRoute(route);
    setParams(params);
  }

  React.useEffect(() => {
    window.addEventListener('popstate', handleRouteChanges);
    return () => window.removeEventListener('popstate', handleRouteChanges);
  }, []);

  return {
    route,
    query,
    matchWith: matchWith(route),
    params,
  };
}


// console.log(matchWith('#/filmes/10')('#/filmes/:id'))
// console.log(getParams('#/filmes/10/atores/20')('#/filmes/:filme/atores/:ator'));
