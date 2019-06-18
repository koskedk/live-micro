import * as singleSpa from 'single-spa'

singleSpa.registerApplication('topbar', () => SystemJS.import('@portal/topbar'),()=>{return true;})

singleSpa.start()
