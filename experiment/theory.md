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

#### 2) Layer height
<p style="text-indent:50px; text-align: justify">It is the height of individual layers. For a given component, more layer height means lesser number of layers will be required to build it.</p>
<center>
<img src="images/layer height.png"></img><br><br>
Layer Height <br>
( Source: I. J. Solomon, P. Sevvel, and J. Gunasekaran, “A review on the various processing parameters in FDM,” Mater. Today Proc., no. xxxx, pp. 10–15, 2020. )
</center>

#### 3) Infill density
<p style="text-indent:50px; text-align: justify">It is the amount of material filled in the product. Usually, fully compact (solid) top and bottom layers and a shell will be printed. The cavity formed like this will be filled with material. The percentage volume of the cavity that is filled is the infill density.</p>
<center>
<img src="images/infillpercentimage.png"></img><br><br>
Infill Density in percentage <br>
( Source: https://all3dp.com/2/infill-3d-printing-what-it-means-and-how-to-use-it/ )
</center>

#### 4) Print speed
<p style="text-indent:50px; text-align: justify">The speed at which the extruder moves while depositing material.</p>

### Effected Parameters :
#### Surface roughness
<p style="text-indent:50px; text-align: justify">Surface roughness is measured as R<sub>a</sub> or average surface roughness.</p>

### Fixed Parameters :
#### 1) Part Geometry
<p style="text-indent:50px; text-align: justify">Geometry of part is fixed as 80*10*4 mm³ which is a ASTM standard specimen size.</p>
<center>
<img src="images/80by10by4geometry.png"></img><br><br>
Part Geometry <br>
</center> 

#### 2) Raster pattern
<p style="text-indent:50px; text-align: justify">It is the pattern in which the raster is applied. Line or recti-linear pattern is used here.</p>
<center>
<img src="images/rectilinearinfill.jpg"></img><br><br>
Rectilinear raster pattern at ±45° angle in alternate layers <br>
( Source:https://www.researchgate.net/figure/Rectilinear-infill-pattern-for-a-a-single-layer-b-multiple-layers-and-c-observed_fig2_330366307)
</center>

#### 3) Number of top and bottom layers and shell and shell thickness.
<p style="text-indent:50px; text-align: justify">Number of top and bottom layers is taken as 2 and 2 shells with 0.8 mm wall thickness is selected.</p>
<center>
<img src="images/shelltopbottomlayer.png"></img><br><br>
The shell and top/bottom layers <br>
( Source: https://www.3dhubs.com/knowledge-base/selecting-optimal-shell-and-infill-parameters-fdm-3d-printing/ )
</center>

#### 4) Build Orientation
<p style="text-indent:50px; text-align: justify">It is the orientation at which the product will be printed on the build plate. Build orientation is fixed as 0° or flat.</p>
<center>
<img src="images/buildorientationsurface.png"></img><br><br>
Build orientation <br>
( Source: T. Yao, Z. Deng, K. Zhang, and S. Li, “A method to predict the ultimate tensile strength of 3D printing polylactic acid (PLA) materials with different printing orientations,” Compos. Part B Eng., vol. 163, no. December 2018, pp. 393–402, 2019. )
</center>

