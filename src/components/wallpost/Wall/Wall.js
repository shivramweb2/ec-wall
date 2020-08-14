import React, {Fragment} from 'react';
import {Wallpost} from './Wall-Post';
export const Wall = ({ name, height, width, createAsset, getAssetUrl }) => {
   // let filetype=getAssetUrl.split('.').pop();
    return (
        <Fragment>
            <Wallpost/>
            <Wallpost/>
            <Wallpost/>
            <Wallpost/>

            <Wallpost/>

            <Wallpost/>
        </Fragment>);
}