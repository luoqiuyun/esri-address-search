const vars = {
  mapAttrs: {
    mapProperties: { basemap: "streets-vector" },
    viewProperties: { center: [-90, 38] },
    loaderOptions: { version: "4.17", css: true }
  },
  esriModules: {
    search: "esri/widgets/Search"
  },
  viewProperties: {
    Indianapolis: {center: [-90, 38], zoom: 9},
    Chicago: {center: [-87, 41], zoom: 9},
    SanJose: {center: [-122, 37.6], zoom: 9}
  }
};

module.exports = (statusCode) => {
  return {
    statusCode,
    body: JSON.stringify(vars),
  };
};
