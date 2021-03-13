export default class DetectVmwareInWebBrowser {
  // This Idea comes from this website:
  // https://bannedit.github.io/Virtual-Machine-Detection-In-The-Browser.html
  // Thanks to him and backrunner
  // If there is infringement, please contact me. 

  constructor(param){
      this.virtualMachineLists.push(param);
  }

  virtualMachineLists=["Vmware","VirtualBox","Hyper-V"]

  usingWebGL = () => {
    var canvas_detectVmware = document.createElement("canvas_detectVmware");
    var gl = canvas_detectVmware.getContext("webgl");

    var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    console.log(vendor);
    console.log(renderer);

    let result=false;
    let type="";

    for(let i=0;i<this.virtualMachineLists.length;i++){
        const item=this.virtualMachineLists[i];
        if(renderer.inclouds(item)&&renderer.inclouds(item.toLowerCase()){
            result=true;
            type=item;
            break;
        }
    }
    
    return {
        result:result,
        type:"",
    }
    
  };
}
