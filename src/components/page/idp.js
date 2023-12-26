import "./idp.css"
import { Helmet } from 'react-helmet';
import {getElementError} from "@testing-library/react";
// import {Redirect} from "react-router-dom";

function idp (props) {
    const service = "blog.chd.huangzhexi.eu.org"
    const accept = (event) => {
        event.preventDefault();
        fetch("/api/oauth/authorize", {
            method: "post",
            headers: { "Content-type": "application/json" }
            // redirect: "manual"
        }).then((res) => {
            if (!res.ok)  {
                throw "No such user"
            }
            return res
        }).then(res => res.json()).then((data => {
            window.location.href = data.Location
        })).catch(() => {
            window.location.href = "/index"
        })
    }
    const reject = () => {
        window.location.href = "/index"
    }
    if (props.user === "") {
        // console.log("here")
        // // return <Redirect path="/login"></Redirect>
        // window.location = "/login"
        // return <></>
    }
    return (
        <div>
            <Helmet>
                <title>IDP Service</title>
            </Helmet>
            <div class="idp-box">
                <p>
                    You are about to access the service:<br />
                     <strong className="idp-servicename">{service}</strong>
                </p>
                <p className="idp-table-p">
                    <table className="idp-table">
                        <thead className="tableHeader">
                        <tr className="tableRow">
                            <th colSpan="3">
                                Information to be Provided to Service
                            </th>
                        </tr>
                        </thead>
                        <tbody className="idp-table-body">
                        <tr className="rowLayout">
                            <td className="idp-table-body-td-right">authPersonScopedAffiliation</td>
                            <td className="idp-table-body-td-right">
                                <strong>member@huangzhexi.eu.org</strong>
                            </td>
                            {/*<td className="idp-table-body-td">*/}
                            {/*    <input id="eduPersonScopedAffiliation" type="hidden" name="_shib_idp_consentIds" value="eduPersonScopedAffiliation" checked="" />*/}
                            {/*</td>*/}
                        </tr>
                        </tbody>
                    </table>
                </p>
                <p className="idp-infomation">
                    The information above would be shared with the service if you proceed.
                    Do you agree to release this information to the service every time you access it?
                </p>
                <div id="generalConsentDiv" className="idp-Consent">
                    Select an information release consent duration:
                    <p className="idp-select-box">
                        <input id="_shib_idp_doNotRememberConsent" type="radio" name="_shib_idp_consentOptions" value="_shib_idp_doNotRememberConsent" defaultChecked={true} />
                            <label >Ask me again at next login</label>
                    </p>
                    <ul className="idp-Consent-Background">
                        <p ><strong>·</strong>   I agree to send my information this time.</p>
                    </ul>
                    <p className="idp-select-box">
                        <input id="_shib_idp_rememberConsent" type="radio" name="_shib_idp_consentOptions" value="_shib_idp_rememberConsent"  />
                            <label >Ask me again if information to be provided to this service changes</label>
                    </p>
                    <ul className="idp-Consent-Background">
                        <p ><strong>·</strong>   I agree that the same information will be sent automatically to this service in the future.</p>
                    </ul>
                    <p className="idp-select-box">
                        <input id="_shib_idp_globalConsent" type="radio" name="_shib_idp_consentOptions" value="_shib_idp_globalConsent" />
                            <label>Do not ask me again</label>
                    </p>
                    <ul className="idp-Consent-Background">
                    <p ><strong>·</strong>   I agree that <strong>all</strong> of my information will be released to <strong>any</strong> service.</p>
                    </ul>
                    This setting can be revoked at any time with the checkbox on the login page.</div>
                <div>
                    <p className="idp-submit">
                        <input type="submit" name="_eventId_proceed" value="Accept" onClick={accept} className="idp-reject"  />
                        <input type="submit" name="_eventId_AttributeReleaseRejected" value="Reject" onClick={reject} />

                    </p>
                </div>
            </div>

        </div>
    )
}

export default idp