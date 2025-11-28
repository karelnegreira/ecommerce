

import {cookies as getCookies} from 'next/headers';


interface Props {
    prefix: string; 
    value: string;
};

export const generateAuthCookie = async ({prefix, value} : Props) => {

    const cookies = await getCookies();

            cookies.set({
                name: `${prefix}-token`, //payload-token by default  
                value: value, 
                httpOnly: true, 
                path: "/", 
                //sameSite: "none", 
                //domain: ""
            //TODO: Ensure cross-domain cookie sharing
            //funroad.com // initial cookie
            //karel.funroad.com cookie does not exist
            }); 
}