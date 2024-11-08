import React from 'react';

const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "8px", color: "#e0e0e0" }}>
        <form className="row g-3" style={{ maxWidth: "600px", margin: "auto" }}>
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label" style={{ color: "#bb86fc" }}>Name</label>
            <input type="text" className="form-control" id="inputName" style={{ backgroundColor: "#333", color: "#fff", borderColor: "#444" }} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label" style={{ color: "#bb86fc" }}>Email</label>
            <input type="email" className="form-control" id="inputEmail" style={{ backgroundColor: "#333", color: "#fff", borderColor: "#444" }} />
          </div>
          <div className="col-12">
            <label htmlFor="inputMobileModel" className="form-label" style={{ color: "#bb86fc" }}>Mobile Model Name</label>
            <input type="text" className="form-control" id="inputMobileModel" placeholder="Oppo, Realme" style={{ backgroundColor: "#333", color: "#fff", borderColor: "#444" }} />
          </div>
          <div className="col-12">
            <label htmlFor="inputQuery" className="form-label" style={{ color: "#bb86fc" }}>Any Query</label>
            <input type="text" className="form-control" id="inputQuery" placeholder="Query" style={{ backgroundColor: "#333", color: "#fff", borderColor: "#444" }} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label" style={{ color: "#bb86fc" }}>City</label>
            <input type="text" className="form-control" id="inputCity" style={{ backgroundColor: "#333", color: "#fff", borderColor: "#444" }} />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label" style={{ color: "#bb86fc" }}>State</label>
            <select id="inputState" className="form-select" style={{ backgroundColor: "#333", color: "#fff", borderColor: "#444" }}>
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label" style={{ color: "#bb86fc" }}>Zip</label>
            <input type="text" className="form-control" id="inputZip" style={{ backgroundColor: "#333", color: "#fff", borderColor: "#444" }} />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck" style={{ color: "#bb86fc" }}>
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#bb86fc", borderColor: "#bb86fc", color: "#1e1e1e" }}>Contact us</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
