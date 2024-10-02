import '../BrowserPreview.css';
import { Link } from 'react-router-dom';
const BrowserPreview = ({ tld, url }) => {
  return (
    <div className="browser-window">
      <div className="browser-header">
        <div className="buttons">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
        </div>
        <div className="address-bar"><Link to={tld+url} >{tld}{url}</Link></div>
      </div>
      <iframe src={url} className="browser-content" title="Website Preview"></iframe>
    </div>
  );
};

export default BrowserPreview;
