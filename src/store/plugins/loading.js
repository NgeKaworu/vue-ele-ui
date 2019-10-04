const loading = store => {
  store.subscribe(mutation => {
    if (
      mutation.type !== "global/stopLoading" &&
      mutation.type !== "global/startLoading"
    ) {
      store.commit("global/stopLoading");
    }
  });
  store.subscribeAction(() => {
    store.commit("global/startLoading");
  });
};

export default loading;
