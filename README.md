base on [ImageStone](http://www.codeproject.com/Articles/13559/ImageStone)

# usage  

 ` var Img = require("manaka-club"); `
 
 ` var img = new Img(); `  
 
## load image  

	 img.load(path);   
	 
	
## append texts  

	img.drawText(text,font,size,location,rgb,cb);    	
	//font,size,location,rgb are optional parameters   	
	//location : an Array of X and Y   	
	//rgb : an Arry of r,g,b  
	
## effects  

	 img.effect(effectName,argsList,callback);   
	 //argsList is an array of effect arguments   
	
## save  

	img.save(path,quality)    	
	//quality are not necessary which is related to saving image quality   
	

## effect list (effect:arguments list)  

  * "3DGrid" : [int nSize, int nDepth]   
  
  * "AdjustRGB" : [int nR, int nG, int nB]  
  
  * "AutoColorEnhance" : []  
  
  * "AutoColorLevel" : []  
  
  * "AutoContrast" : []  
  
  * "Bulge" : [int nAmount, double offset_x=0, double offset_y=0]   
  
  * "Ribbon" : [int nSwing, int nFrequency]  
  
  * "Ripple" : [int nWavelength, int nAmplitude]  
  
  * "Rotate" : [int nAngle]  
  
  * "Shear" :[int nShearX, int nShearY]  
  
  * "Twist" : [int nAmount, int nSize, double offset_x=0, double offset_y=0]   
  
  * "Wave" : [int nWavelength, int nAmplitude, double fPhase=0]  
  
  * "BlindsX" : [int nWidth, int nOpacity, R,G,B]  
  
  * "BlindsY" :[int nWidth, int nOpacity, R,G,B]   
  
  * "BlurGauss":[int nSize]  
  
  * "BlurMotion" : [int nLength, int nAngle]  
  
  * "BlurRadial" : [int nAngle, double offset_x=0, double offset_y=0]  
  
  * "BlurZoom" : [int nLength, double offset_x=0, double offset_y=0]  
  
  * "BrightnessContrast" : [int nBrightness, int nContrast]  
  
  * "ColorTone" : [int nSaturation,r,g,b]  
  
  * "Gamma" : [int nGamma]  
  
  * "Mosaic" : [int nSize]  
  
  * "Noisify" : [int nLevel]  
  
  * "OldPhoto" : [int nBlurSize, int nBrightness=-20, int nContrast=-40]  
  
  * "PencilSketch":[int nPenSize, int nRange]  
  
## other  

	APL:chs  
	
	OS: windows  
	  
	-0.1.0  
	
	-0.1.1 :  package.json updata  
	
	-0.1.3 :  readme updata  
	
	-0.1.4 :  ia32,github updata 
	
	
		
	