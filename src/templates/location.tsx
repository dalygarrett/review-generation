/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding stream document stream document (based on the filter).
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import "../index.css";
import HeroBanner from "../components/HeroBanner";
import TilesRow from "../components/TilesRow";


/**
 * Required when Knowledge Graph Stream is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["id", "c_abogadoURL", "name", "c_tripadvisorURL", "slug", "c_openTableURL", "logo", "c_firstPartyURL", "description", "c_yPURL", "c_findLawURL", "c_facebookURL", "c_gBPURL"],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.name;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 */




const EntityPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { name, logo, c_abogadoURL, c_tripadvisorURL, description, c_openTableURL, c_firstPartyURL, c_yPURL, c_findLawURL, c_facebookURL, c_gBPURL } = document;

  const tileData = [
    // Google
    {
      href: c_gBPURL,
      imageSrc: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png',
    },
    // Facebook
    {
      href: c_facebookURL,
      imageSrc: 'https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png',
    },
    // Findlaw
    {
      href: c_findLawURL,
      imageSrc: 'https://yt3.googleusercontent.com/MB2297Dhvn3-W9NFm-Hdwmu-DEOZfxLBPhSxWOW01ZJSmmz77oGRAL0MzCbbwbe2GtALnQf2Og=s900-c-k-c0x00ffffff-no-rj',
    },
    // YP
    {
      href: c_yPURL,
      imageSrc: 'https://en.wikirug.org/images/b/bc/Logo_Yellow_Pages.png',
    },
      // First Party
      {
        href: c_firstPartyURL,
        imageSrc: 'https://www.yext-static.com/cms/spark/1/site-icon-283.svg',
      },
      // Opentable
      {
        href: c_openTableURL,
        imageSrc: 'https://logosandtypes.com/wp-content/uploads/2021/04/Opentable.png',
      },
      // Tripadvisor
      {
        href: c_tripadvisorURL,
        imageSrc: 'https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png',
      },
      // Abogado
      {
        href: c_abogadoURL,
        imageSrc: 'https://cdn.abogado.com/image/upload/c_pad,w_500,h_500/q_auto,f_auto,c_lpad,w_600,h_600,b_rgb:fff/v1687594901/resources/abogado/images/v8/abogado-logo2.png',
      },
    
    // Add more tile data as needed
  ];

  const filteredTileData = tileData.filter(tile => tile.href);

  return (
    <>
      <HeroBanner
      name={name}
      logo={logo.image.url}
      description={description} ></HeroBanner>
      {filteredTileData.length > 0 && <TilesRow tileData={filteredTileData} />}
    </>
  );
};

export default EntityPage;
