export default DetectVmwareInWebBrowser = (param)=> {
  // This Idea comes from this website:
  // https://bannedit.github.io/Virtual-Machine-Detection-In-The-Browser.html
  // Thanks to him and backrunner
  // If there is infringement, please contact me. 

  virtualMachineLists=["Vmware","VirtualBox","Hyper-V"]
  
  virtualMachineList.push(param)

  usingWebGL = () => {
    let canvas_detectVmware = document.createElement("canvas_detectVmware");
    let gl = canvas_detectVmware.getContext("webgl");

    let debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    let vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    let renderer="";
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    console.log(vendor);
    console.log(renderer);

    let result=false;
    let type="";

    for(let i=0;i<this.virtualMachineLists.length;i++){
        const item=this.virtualMachineLists[i];
        if(renderer.includes(item)||renderer.includes(item.toLowerCase()){
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
  
  return usingWebGL()
}
