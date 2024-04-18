import React, { useEffect, useState } from "react";
import Drawer from 'react-modern-drawer';
export default () => {
    
    const [active, setActive] = useState(false);
    const [Component, setComponent] = useState(null);
    const [isComponentLoaded, setComponentLoaded] = useState(false);

    const updateDrawerContent = (componentName, data) => {
         import(/* webpackChunkName: "drawer-component" */ `JsComponents/${componentName}`).then(module => {
            const Component = module.default;
            setComponent(<Component data={data} />);
          });
    }

    useEffect(() => {
        if(Component) {
            setComponentLoaded(true);
            setActive(true);
        }
    },[Component])


    const openDrawer = () => {
        setActive(true);
    }

    const closeDrawer = () => {
        setActive(false);
    }


    useEffect(() => {
      window.drawer = {
        update: updateDrawerContent, 
        open: openDrawer,
        close: closeDrawer
      };
    }, []);

    return (<div className={`drawer ${active ? 'drawer--active' : ''}`}>
        {active && isComponentLoaded &&
            <Drawer
                open={active}
                onClose={closeDrawer}
                direction='right'
                className='drawer__container'
            >   
               {Component}
            </Drawer>
        }
    </div>)
}