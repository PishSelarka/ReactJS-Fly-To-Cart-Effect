import Helmet from "react-helmet"
import React from 'react';
import axios from "axios";

let Helpers = {
  axios: axios,
  baseUrl: 'http://192.168.1.23/Pangea-Pod/backend/api/',
  SEOtags: function (title = null, description = null, keyword = null) {
    let commonTitle = 'Home';
    let commonDescription = 'Common Description';
    let commonKeyword = 'Common Keyword';
    return (
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{title ? title : commonTitle}</title>
        <meta name="Keywords" content={keyword ? keyword : commonKeyword}/>
        <meta name="Description" content={description ? description : commonDescription}/>
      </Helmet>
    );
  },
  setLocalStorageData: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getLocalStorageData: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

export default Helpers;