import React, {Fragment} from 'react';
import "./Wall-Post.css";
export const Wallpost = ({ name, height, width, createAsset, getAssetUrl }) => {
    //let filetype=getAssetUrl.split('.').pop();
    
    return (
      <Fragment>
          <div className="wallpost-card">
                    <div className="wallpost-card_user-info">
                        <div className="wallpost-card_user-icon">
                            <img src="" />
                        </div>
                        <div className="wallpost-card_user-sub_info">
                            <div className="wallpost-card_user-name">
                                <strong>Manoj Saini</strong>
                            </div>
                            <div className="wallpost-card_user-info_title">
                                Your title here
                            </div>
                        </div>
                        <div className="more_info">...dsd</div>
                    </div>
                <div className="wallpost-card_media">
                    <img className="wallpost-img" src={"http://www.fareportal.com/wp-content/uploads/2017/07/fp-banner.jpg"} height="200" width={"800"}/>
                </div>
               <div className="wallpost-card_content">
               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </div>
                <div className="wallpost-card_review-block">
                    <div className="views">3987</div>
                    <div className="comments">445</div>
                    <div className="likes">3987</div>
                </div>

                <div className="wallpost-card_comment">
                    <textarea placeHolder="Write a comment"/>
                </div>
          </div>
      </Fragment>);
}