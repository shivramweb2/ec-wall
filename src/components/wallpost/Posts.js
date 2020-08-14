import React from 'react';
import PostStyle from '../../style/Post';

const Post = (props) =>{
    return(
        <React.Fragment>
            <PostStyle/>
            <div className={"container"}>
                <div className={"Rectangle-1873"}>
                {
                 props.postListing?   props.postListing&&props.postListing.map((value,key)=>{
                        let imageUrl = value.key?props.asset.getAssetUrl(value.key):'';
                        return(
                            <div className={"Rectangle-213 mb-5"}>
                                <div className={"col-md-6 Avatar"}>
                                    <i className={" fa fa-user"}/>
                                </div>
                                <div className={"col-md-6"}>
                                    <div className={"row profile-name"}>
                                        <span>Mukesh Saini</span>
                                    </div>
                                    <div className={"row Subjects-name-will-come-here"}>
                                        <span>Mukesh Saini</span>
                                    </div>
                                </div>
                                <div className={"col-md-6 Repeat-Grid-13"}>

                                </div>
                                <div className={"row"}>
                                    <img src={imageUrl}
                                         srcSet={imageUrl}
                                         className="Rectangle-767"
                                         width={"100%"}
                                    />
                                </div>
                            </div>
                        )
                    }):"No posts right now "
                }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post;
