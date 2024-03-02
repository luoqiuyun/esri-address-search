import React, { useState, useEffect} from 'react';
import { loadModules } from "esri-loader";
import { Map } from "@esri/react-arcgis";
import "./styles.css";

const App = () => {
  const [vars, setVars] = useState(null);
  const [viewProperties, setViewProperties] = useState({center: [-122, 37.6], zoom: 9});
  const [mapAttrs, setMapAttrs] = useState({});

  useEffect(() => {
    fetch('/api/vars')
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then(data => setVars(data))
      .catch((response) => {});
  }, []);

  useEffect(() => {
    if (!vars) return;
    setMapAttrs(vars.mapAttrs);
    setViewProperties(vars.viewProperties.SanJose);
  }, [vars]);

  const addSearch = function (map, view) {
    if (!vars) return;
    loadModules([vars.esriModules.search]).then(([Search]) => {
      const searchWidget = new Search({
        view: view
      });
      view.ui.add(searchWidget, {
        position: "top-right"
      });
    });
  };

  //const attrs = !!vars ? vars.mapAttrs : {};

  return (
    <Map
      {...mapAttrs}
      onLoad={addSearch}
      viewProperties={viewProperties}
    />
  );
};

export default App;
