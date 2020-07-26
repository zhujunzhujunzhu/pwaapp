jy.regPlugin("VIEWER","customControlPatch",function(t){var e=this,o=e.host,a=o.controls,n=new THREE.BufferGeometry;n.addAttribute("position",new THREE.Float32BufferAttribute([0,0,0],3));var r=new THREE.TextureLoader;r.crossOrigin="Anonymous";var s=new THREE.PointsMaterial({size:10,depthTest:!1,sizeAttenuation:!1,transparent:!0});s.color=new THREE.Color(1,0,0);var i=new THREE.Points(n,s);i.visible=!1,o.scene.add(i),a.touchstartPatch=function(){var t=c(a.canvasCoords);if(a.setLastPick(t),i.visible=!0,!a.getLastPick()){var e=new THREE.Vector3;e.set(a.canvasCoords.x,a.canvasCoords.y,.5).unproject(a.camera);var o={};o.point=e,a.setLastPick(o)}var n=a.getLastPick().point;i.position.copy(n),i.updateWorldMatrix()},a.touchendPatch=function(t){i.visible=!1},a.updatePickSprite=function(t,e,o){if(e){var a=r.load(e,function(){s.needsUpdate=!0,a.needsUpdate=!0});s.map=a}s.size=t,o?s.color=o:s.color.set(16777215)},a.mousedownPatch=function(t){if(t.button===JY.THREE.Mouses.Left||t.button===JY.THREE.Mouses.Right){var e=c(a.canvasCoords);a.setLastPick(e),i.visible=!0}if(!a.getLastPick()){var o=new THREE.Vector3;o.set(a.canvasCoords.x,a.canvasCoords.y,.5).unproject(a.camera);var n={};n.point=o,a.setLastPick(n)}var r=a.getLastPick().point;i.position.copy(r),i.updateWorldMatrix()},a.mouseupPatch=function(t){i.visible=!1},a.leftDrag=function(t){var e=a.getLastPick().point,o=(new THREE.Vector3).copy(e).project(a.camera).z,n=new THREE.Vector3(a.canvasCoords.x,a.canvasCoords.y,o).unproject(a.camera),r=(new THREE.Vector3).subVectors(e,n);a.camera.position.add(r),a.target.add(r),a.update()},a.middleDrag=function(t){a.rotateCamera(t.dltX,t.dltY)},a.rightDrag=function(t){a.rotateAround(t.dltX,t.dltY)},a.mouseWheel=function(t){var e,o=c(a.canvasCoords);o?(e=.1*o.point.distanceTo(a.camera.position),e<.1&&(e=.1)):e=5,a.moveTowards(a.canvasCoords,e*t.dlt/120)};var c=function(t){var e=new jy.Event(JY.THREE.Events.IntersectModel,{x:t.x,y:t.y,selected:!1,ctrlKey:!1,pickedModel:null}).fire(o).pickedModel;return e}});