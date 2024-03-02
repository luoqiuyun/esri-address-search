import React, { useState, useEffect} from 'react';
import { loadModules } from "esri-loader";
import { Map } from "@esri/react-arcgis";
import "./styles.css";

const App = () => {
  const [vars, setVars] = useState(null);

  useEffect(() => {
    fetch('/api/vars')
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then(data => setVars(data))
      .catch((response) => {});
  }, []);

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

  const attrs = !!vars ? vars.mapAttrs : {};

  return (
    <Map
      viewProperties={{center: [-90, 38]}}
      onLoad={addSearch}
      {...attrs}
    />
  );
};

export default App;
