const vars = {
  mapAttrs: {
    mapProperties: { basemap: "streets-vector" },
    viewProperties: { center: [-90, 38] },
    loaderOptions: { version: "4.17", css: true }
  },
  esriModules: {
    search: "esri/widgets/Search"
  }
};

module.exports = (statusCode) => {
  return {
    statusCode,
    body: JSON.stringify(vars),
  };
};
