### Fused Deposition Modelling(FDM) process<br>
<p style="text-indent:50px; text-align: justify">It is a 3D printing process where the material is fed into a heated nozzle from a chamber via rollers. The heated material is extruded onto a base plate, which solidifies on the plate. The nozzle/base plate moves in XY plane to deposit a layer of material. The base plate/nozzle moves in Z direction to aid the deposition of next layer on top of first layer. The whole product is built layer by layer.</p>
<center>
<img src="images/3dprint.png"></img><br><br>
FDM Process Schematic <br>
( Source: I. J. Solomon, P. Sevvel, and J. Gunasekaran, “A review on the various processing parameters in FDM,” Mater. Today Proc., no. xxxx, pp. 10–15, 2020.)
</center>

### Process Parameters :
#### 1) Material
<p style="text-indent:50px; text-align: justify">The materials used here are PLA (Poly Lactic Acid) and ABS (Acrylonitrile Butadiene Styrene).</p>

#### 1) Layer height
<p style="text-indent:50px; text-align: justify">It is the height of individual layers. For a given component, more layer height means lesser number of layers will be required to build it. Usually it is around the range of 50 &#181m - 500 &#181m. Lesser layer heights are preferred for more adhesion between layers and strength. Layer height shouldn't be more than the nozzle diameter.</p>
<center>
<img src="images/layer height.png"></img><br><br>
Layer Height <br>
( Source: I. J. Solomon, P. Sevvel, and J. Gunasekaran, “A review on the various processing parameters in FDM,” Mater. Today Proc., no. xxxx, pp. 10–15, 2020. )
</center>

#### 2) Infill density
<p style="text-indent:50px; text-align: justify">It is the amount of material filled in the product. Usually, fully compact (solid) top and bottom layers and a shell will be printed. The cavity formed like this will be filled with material. The percentage volume of the cavity that is filled is the infill density. Usually for FDM processes infill density is taken as low values in the range 18%-20%, due to importance of time and cost savings over strength.</p>
<center>
<img src="images/infillpercentimage.png"></img><br><br>
Infill Density in percentage <br>
( Source: https://all3dp.com/2/infill-3d-printing-what-it-means-and-how-to-use-it/ )
</center>

#### 3) Feed rate
<p style="text-indent:50px; text-align: justify">It is the speed at which the material is fed onto the build plate by the nozzle. Increased speed can lead to more material being deposited at certain points, which can lead to dimensional inaccuracies and even product failure. Higher feed rate can also lead to printer jam, where material blocks the nozzle of the extruder.</p>





### Effected Parameters :
#### Print time
<p style="text-indent:50px; text-align: justify">It is the total time taken to print the whole specimen. Usually, in 3D printing using FDM process, more importance is given to reducing total time and cost than to strength. This is because the parts are made for purposes that doesnot require very high strength. But, enough time has to be given to the process to ensure the quality and dimensional accuracy of the product.</p>

### Fixed Parameters :
#### 1) Material
<p style="text-indent:50px; text-align: justify">The material used here is PLA (Poly Lactic Acid).</p>

#### 2) Part Geometry
<p style="text-indent:50px; text-align: justify">Geometry of part is fixed as 80*10*4 mm³ which is a ASTM standard specimen size.</p>
<center>
<img src="images/80by10by4geometry.png"></img><br><br>
Part Geometry <br>
</center> 

#### 3) Raster pattern
<p style="text-indent:50px; text-align: justify">It is the pattern in which the raster is applied. Line or recti-linear pattern is used here. The raster angle is fixed as ±45° in alternate layers. </p>
<center>
<img src="images/rectilinearinfill.jpg"></img><br><br>
Rectilinear raster pattern at ±45° angle in alternate layers <br>
( Source:https://www.researchgate.net/figure/Rectilinear-infill-pattern-for-a-a-single-layer-b-multiple-layers-and-c-observed_fig2_330366307)
</center>

#### 4) Number of top and bottom layers and shell and shell thickness.
<p style="text-indent:50px; text-align: justify">Number of top and bottom layers is taken as 2 and 2 shells with 0.8 mm wall thickness is selected.</p>
<center>
<img src="images/shelltopbottomlayer.png"></img><br><br>
The shell and top/bottom layers <br>
( Source: https://www.3dhubs.com/knowledge-base/selecting-optimal-shell-and-infill-parameters-fdm-3d-printing/ )
</center>

#### 5) Build Orientation
<p style="text-indent:50px; text-align: justify">It is the orientation at which the product will be printed on the build plate. Build orientation is fixed at 0° or flat. The build plate will be kept at a lower temperature like 60&deg;C.</p>
<center>
<img src="images/buildorientationsurface.png"></img><br><br>
Build orientation <br>
( Source: T. Yao, Z. Deng, K. Zhang, and S. Li, “A method to predict the ultimate tensile strength of 3D printing polylactic acid (PLA) materials with different printing orientations,” Compos. Part B Eng., vol. 163, no. December 2018, pp. 393–402, 2019. )
</center>
