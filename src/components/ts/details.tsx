import { useSelector } from "react-redux";
import "../css/details.css";
export const Details = () => {
    const data: any = useSelector((state) => state);
    // console.log(data);
    return (
        <div className="details">
            <div className="header">Additional Details</div>
            <div className="nameField">
                <div className="label">Rocket Name</div>
                <span>{data.launchDetails.Name}</span>
            </div>
            <div className="siteField">
                <div className="label">Launched From</div>

                <span>{data.launchDetails.Site}</span>
            </div>
            <div className="description">
                <div className="label">Details</div>
                <span>{data.launchDetails.Details}</span>
            </div>
        </div>
    );
};
