import React from "react";

const Newsitem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
        <div>
            <div className="card " id="carditems">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h5 className="card-title">{title}
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1, fontSize: '12px', marginTop: '10px' }}>{!source ? "Unknown" : source}</span>
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">By {!author ? "Unknown" : author} on{" "}{new Date(date).toGMTString()}</small>
                    </p>
                    <a href={newsUrl} className="btn btn-dark">
                        Read More
                    </a> </div>
            </div>
        </div>
    );
}
export default Newsitem;