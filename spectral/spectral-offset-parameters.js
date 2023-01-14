/*
===========
MIT License
===========

Copyright (c) 2021 David Montero Loaiza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

=================
GitHub Repository
=================

spectral module: https://github.com/awesome-spectral-indices/spectral
Awesome Spectral Indices: https://github.com/awesome-spectral-indices/awesome-spectral-indices
*/

/*
==========
Attributes
==========
*/

var offsetParams = {
    'AAFC/ACI': {
        'landcover': 0.0
    },
    'ACA/reef_habitat/v1_0': {
        'benthic': 0.0,
        'geomorphic': 0.0,
        'reef_mask': 0.0
    },
    'AHN/AHN2_05M_INT': {
        'elevation': 0.0
    },
    'AHN/AHN2_05M_NON': {
        'elevation': 0.0
    },
    'AHN/AHN2_05M_RUW': {
        'elevation': 0.0
    },
    'ASTER/AST_L1T_003': {
        'B01': 0.0,
        'B02': 0.0,
        'B04': 0.0,
        'B05': 0.0,
        'B06': 0.0,
        'B07': 0.0,
        'B08': 0.0,
        'B09': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B12': 0.0,
        'B13': 0.0,
        'B14': 0.0,
        'B3N': 0.0
    },
    'AU/GA/AUSTRALIA_5M_DEM': {
        'elevation': 0.0
    },
    'AU/GA/DEM_1SEC/v10/DEM-H': {
        'elevation': 0.0
    },
    'AU/GA/DEM_1SEC/v10/DEM-S': {
        'elevation': 0.0
    },
    'BIOPAMA/GlobalOilPalm/v1': {
        'classification': 0.0
    },
    'BNU/FGS/CCNL/v1': {
        'b1': 0.0
    },
    'CAS/IGSNRR/PML/V2': {
        'ET_water': 0.0,
        'Ec': 0.0,
        'Ei': 0.0,
        'Es': 0.0,
        'GPP': 0.0
    },
    'CAS/IGSNRR/PML/V2_v017': {
        'ET_water': 0.0,
        'Ec': 0.0,
        'Ei': 0.0,
        'Es': 0.0,
        'GPP': 0.0
    },
    'CGIAR/SRTM90_V4': {
        'elevation': 0.0
    },
    'CIESIN/GPWv4/ancillary-data-grids': {
        'data-context': 0.0,
        'land-area': 0.0,
        'mean-administrative-unit-area': 0.0,
        'national-identifier': 0.0,
        'water-area': 0.0,
        'water-mask': 0.0
    },
    'CIESIN/GPWv4/population-count': {
        'population-count': 0.0
    },
    'CIESIN/GPWv4/population-density': {
        'population-density': 0.0
    },
    'CIESIN/GPWv4/unwpp-adjusted-population-count': {
        'population-count': 0.0
    },
    'CIESIN/GPWv4/unwpp-adjusted-population-density': {
        'population-density': 0.0
    },
    'CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics': {
        'basic_demographic_characteristics': 0.0
    },
    'CIESIN/GPWv411/GPW_Data_Context': {
        'data_context': 0.0
    },
    'CIESIN/GPWv411/GPW_Land_Area': {
        'land_area': 0.0
    },
    'CIESIN/GPWv411/GPW_Mean_Administrative_Unit_Area': {
        'mean_administrative_unit_area': 0.0
    },
    'CIESIN/GPWv411/GPW_National_Identifier_Grid': {
        'national_identifier_grid': 0.0
    },
    'CIESIN/GPWv411/GPW_Population_Count': {
        'population_count': 0.0
    },
    'CIESIN/GPWv411/GPW_Population_Density': {
        'population_density': 0.0
    },
    'CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count': {
        'unwpp-adjusted_population_count': 0.0
    },
    'CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Density': {
        'unwpp-adjusted_population_density': 0.0
    },
    'CIESIN/GPWv411/GPW_Water_Area': {
        'water_area': 0.0
    },
    'CIESIN/GPWv411/GPW_Water_Mask': {
        'water_mask': 0.0
    },
    'COPERNICUS/CORINE/V18_5_1/100m': {
        'landcover': 0.0
    },
    'COPERNICUS/CORINE/V20/100m': {
        'landcover': 0.0
    },
    'COPERNICUS/Landcover/100m/Proba-V-C3/Global': {
        'bare-coverfraction': 0.0,
        'change-confidence': 0.0,
        'crops-coverfraction': 0.0,
        'data-density-indicator': 0.0,
        'discrete_classification': 0.0,
        'discrete_classification-proba': 0.0,
        'forest_type': 0.0,
        'grass-coverfraction': 0.0,
        'moss-coverfraction': 0.0,
        'shrub-coverfraction': 0.0,
        'snow-coverfraction': 0.0,
        'tree-coverfraction': 0.0,
        'urban-coverfraction': 0.0,
        'water-permanent-coverfraction': 0.0,
        'water-seasonal-coverfraction': 0.0
    },
    'COPERNICUS/Landcover/100m/Proba-V/Global': {
        'bare-coverfraction': 0.0,
        'bare-coverfraction-stddev': 0.0,
        'crops-coverfraction': 0.0,
        'crops-coverfraction-stddev': 0.0,
        'data-density-indicator': 0.0,
        'discrete_classification': 0.0,
        'discrete_classification-proba': 0.0,
        'forest_type': 0.0,
        'grass-coverfraction': 0.0,
        'grass-coverfraction-stddev': 0.0,
        'moss-coverfraction': 0.0,
        'moss-coverfraction-stddev': 0.0,
        'shrub-coverfraction': 0.0,
        'shrub-coverfraction-stddev': 0.0,
        'snow-coverfraction': 0.0,
        'tree-coverfraction': 0.0,
        'tree-coverfraction-stddev': 0.0,
        'urban-coverfraction': 0.0,
        'water-permanent-coverfraction': 0.0,
        'water-seasonal-coverfraction': 0.0
    },
    'COPERNICUS/S1_GRD': {
        'HH': 0.0,
        'HV': 0.0,
        'VH': 0.0,
        'VV': 0.0,
        'angle': 0.0
    },
    'COPERNICUS/S2': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B12': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B8A': 0.0,
        'B9': 0.0,
        'QA10': 0.0,
        'QA20': 0.0,
        'QA60': 0.0
    },
    'COPERNICUS/S2_CLOUD_PROBABILITY': {
        'probability': 0.0
    },
    'COPERNICUS/S2_HARMONIZED': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B12': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B8A': 0.0,
        'B9': 0.0,
        'QA10': 0.0,
        'QA20': 0.0,
        'QA60': 0.0
    },
    'COPERNICUS/S2_SR': {
        'AOT': 0.0,
        'B1': 0.0,
        'B11': 0.0,
        'B12': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B8A': 0.0,
        'B9': 0.0,
        'MSK_CLDPRB': 0.0,
        'MSK_SNWPRB': 0.0,
        'QA10': 0.0,
        'QA20': 0.0,
        'QA60': 0.0,
        'SCL': 0.0,
        'TCI_B': 0.0,
        'TCI_G': 0.0,
        'TCI_R': 0.0,
        'WVP': 0.0
    },
    'COPERNICUS/S2_SR_HARMONIZED': {
        'AOT': 0.0,
        'B1': 0.0,
        'B11': 0.0,
        'B12': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B8A': 0.0,
        'B9': 0.0,
        'MSK_CLDPRB': 0.0,
        'MSK_SNWPRB': 0.0,
        'QA10': 0.0,
        'QA20': 0.0,
        'QA60': 0.0,
        'SCL': 0.0,
        'TCI_B': 0.0,
        'TCI_G': 0.0,
        'TCI_R': 0.0,
        'WVP': 0.0
    },
    'COPERNICUS/S3/OLCI': {
        'Oa01_radiance': 0.0,
        'Oa02_radiance': 0.0,
        'Oa03_radiance': 0.0,
        'Oa04_radiance': 0.0,
        'Oa05_radiance': 0.0,
        'Oa06_radiance': 0.0,
        'Oa07_radiance': 0.0,
        'Oa08_radiance': 0.0,
        'Oa09_radiance': 0.0,
        'Oa10_radiance': 0.0,
        'Oa11_radiance': 0.0,
        'Oa12_radiance': 0.0,
        'Oa13_radiance': 0.0,
        'Oa14_radiance': 0.0,
        'Oa15_radiance': 0.0,
        'Oa16_radiance': 0.0,
        'Oa17_radiance': 0.0,
        'Oa18_radiance': 0.0,
        'Oa19_radiance': 0.0,
        'Oa20_radiance': 0.0,
        'Oa21_radiance': 0.0,
        'quality_flags': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_AER_AI': {
        'absorbing_aerosol_index': 0.0,
        'sensor_altitude': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_AER_LH': {
        'aerosol_height': 0.0,
        'aerosol_optical_depth': 0.0,
        'aerosol_pressure': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_CLOUD': {
        'cloud_base_height': 0.0,
        'cloud_base_pressure': 0.0,
        'cloud_fraction': 0.0,
        'cloud_optical_depth': 0.0,
        'cloud_top_height': 0.0,
        'cloud_top_pressure': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0,
        'surface_albedo': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_CO': {
        'CO_column_number_density': 0.0,
        'H2O_column_number_density': 0.0,
        'cloud_height': 0.0,
        'sensor_altitude': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_HCHO': {
        'HCHO_slant_column_number_density': 0.0,
        'cloud_fraction': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0,
        'tropospheric_HCHO_column_number_density': 0.0,
        'tropospheric_HCHO_column_number_density_amf': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_NO2': {
        'NO2_column_number_density': 0.0,
        'NO2_slant_column_number_density': 0.0,
        'absorbing_aerosol_index': 0.0,
        'cloud_fraction': 0.0,
        'sensor_altitude': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0,
        'stratospheric_NO2_column_number_density': 0.0,
        'tropopause_pressure': 0.0,
        'tropospheric_NO2_column_number_density': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_O3': {
        'O3_column_number_density': 0.0,
        'O3_column_number_density_amf': 0.0,
        'O3_effective_temperature': 0.0,
        'O3_slant_column_number_density': 0.0,
        'cloud_fraction': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/NRTI/L3_SO2': {
        'SO2_column_number_density': 0.0,
        'SO2_column_number_density_15km': 0.0,
        'SO2_column_number_density_amf': 0.0,
        'SO2_slant_column_number_density': 0.0,
        'cloud_fraction': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_AER_AI': {
        'absorbing_aerosol_index': 0.0,
        'sensor_altitude': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_AER_LH': {
        'aerosol_height': 0.0,
        'aerosol_optical_depth': 0.0,
        'aerosol_pressure': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_CH4': {
        'CH4_column_volume_mixing_ratio_dry_air': 0.0,
        'CH4_column_volume_mixing_ratio_dry_air_bias_corrected': 0.0,
        'CH4_column_volume_mixing_ratio_dry_air_uncertainty': 0.0,
        'aerosol_height': 0.0,
        'aerosol_optical_depth': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_CLOUD': {
        'cloud_base_height': 0.0,
        'cloud_base_pressure': 0.0,
        'cloud_fraction': 0.0,
        'cloud_optical_depth': 0.0,
        'cloud_top_height': 0.0,
        'cloud_top_pressure': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0,
        'surface_albedo': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_CO': {
        'CO_column_number_density': 0.0,
        'H2O_column_number_density': 0.0,
        'cloud_height': 0.0,
        'sensor_altitude': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_HCHO': {
        'HCHO_slant_column_number_density': 0.0,
        'cloud_fraction': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0,
        'tropospheric_HCHO_column_number_density': 0.0,
        'tropospheric_HCHO_column_number_density_amf': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_NO2': {
        'NO2_column_number_density': 0.0,
        'NO2_slant_column_number_density': 0.0,
        'absorbing_aerosol_index': 0.0,
        'cloud_fraction': 0.0,
        'sensor_altitude': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0,
        'stratospheric_NO2_column_number_density': 0.0,
        'tropopause_pressure': 0.0,
        'tropospheric_NO2_column_number_density': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_O3': {
        'O3_column_number_density': 0.0,
        'O3_effective_temperature': 0.0,
        'cloud_fraction': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_O3_TCL': {
        'ozone_tropospheric_mixing_ratio': 0.0,
        'ozone_tropospheric_mixing_ratio_precision': 0.0,
        'ozone_tropospheric_vertical_column': 0.0,
        'ozone_tropospheric_vertical_column_precision': 0.0,
        'qa_value': 0.0
    },
    'COPERNICUS/S5P/OFFL/L3_SO2': {
        'SO2_column_number_density': 0.0,
        'SO2_column_number_density_15km': 0.0,
        'SO2_column_number_density_amf': 0.0,
        'SO2_slant_column_number_density': 0.0,
        'absorbing_aerosol_index': 0.0,
        'cloud_fraction': 0.0,
        'sensor_azimuth_angle': 0.0,
        'sensor_zenith_angle': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 0.0
    },
    'CPOM/CryoSat2/ANTARCTICA_DEM': {
        'data_composition': 0.0,
        'elevation': 0.0,
        'slope': 0.0,
        'z_smoothed': 0.0,
        'z_uncertainty': 0.0
    },
    'CSIRO/SLGA': {
        'AWC_000_005_05': 0.0,
        'AWC_000_005_95': 0.0,
        'AWC_000_005_EV': 0.0,
        'AWC_005_015_05': 0.0,
        'AWC_005_015_95': 0.0,
        'AWC_005_015_EV': 0.0,
        'AWC_015_030_05': 0.0,
        'AWC_015_030_95': 0.0,
        'AWC_015_030_EV': 0.0,
        'AWC_030_060_05': 0.0,
        'AWC_030_060_95': 0.0,
        'AWC_030_060_EV': 0.0,
        'AWC_060_100_05': 0.0,
        'AWC_060_100_95': 0.0,
        'AWC_060_100_EV': 0.0,
        'AWC_100_200_05': 0.0,
        'AWC_100_200_95': 0.0,
        'AWC_100_200_EV': 0.0,
        'BDW_000_005_05': 0.0,
        'BDW_000_005_95': 0.0,
        'BDW_000_005_EV': 0.0,
        'BDW_005_015_05': 0.0,
        'BDW_005_015_95': 0.0,
        'BDW_005_015_EV': 0.0,
        'BDW_015_030_05': 0.0,
        'BDW_015_030_95': 0.0,
        'BDW_015_030_EV': 0.0,
        'BDW_030_060_05': 0.0,
        'BDW_030_060_95': 0.0,
        'BDW_030_060_EV': 0.0,
        'BDW_060_100_05': 0.0,
        'BDW_060_100_95': 0.0,
        'BDW_060_100_EV': 0.0,
        'BDW_100_200_05': 0.0,
        'BDW_100_200_95': 0.0,
        'BDW_100_200_EV': 0.0,
        'CLY_000_005_05': 0.0,
        'CLY_000_005_95': 0.0,
        'CLY_000_005_EV': 0.0,
        'CLY_005_015_05': 0.0,
        'CLY_005_015_95': 0.0,
        'CLY_005_015_EV': 0.0,
        'CLY_015_030_05': 0.0,
        'CLY_015_030_95': 0.0,
        'CLY_015_030_EV': 0.0,
        'CLY_030_060_05': 0.0,
        'CLY_030_060_95': 0.0,
        'CLY_030_060_EV': 0.0,
        'CLY_060_100_05': 0.0,
        'CLY_060_100_95': 0.0,
        'CLY_060_100_EV': 0.0,
        'CLY_100_200_05': 0.0,
        'CLY_100_200_95': 0.0,
        'CLY_100_200_EV': 0.0,
        'DER_000_200_05': 0.0,
        'DER_000_200_95': 0.0,
        'DER_000_200_EV': 0.0,
        'DES_000_200_05': 0.0,
        'DES_000_200_95': 0.0,
        'DES_000_200_EV': 0.0,
        'ECE_000_005_05': 0.0,
        'ECE_000_005_95': 0.0,
        'ECE_000_005_EV': 0.0,
        'ECE_005_015_05': 0.0,
        'ECE_005_015_95': 0.0,
        'ECE_005_015_EV': 0.0,
        'ECE_015_030_05': 0.0,
        'ECE_015_030_95': 0.0,
        'ECE_015_030_EV': 0.0,
        'ECE_030_060_05': 0.0,
        'ECE_030_060_95': 0.0,
        'ECE_030_060_EV': 0.0,
        'ECE_060_100_05': 0.0,
        'ECE_060_100_95': 0.0,
        'ECE_060_100_EV': 0.0,
        'ECE_100_200_05': 0.0,
        'ECE_100_200_95': 0.0,
        'ECE_100_200_EV': 0.0,
        'NTO_000_005_05': 0.0,
        'NTO_000_005_95': 0.0,
        'NTO_000_005_EV': 0.0,
        'NTO_005_015_05': 0.0,
        'NTO_005_015_95': 0.0,
        'NTO_005_015_EV': 0.0,
        'NTO_015_030_05': 0.0,
        'NTO_015_030_95': 0.0,
        'NTO_015_030_EV': 0.0,
        'NTO_030_060_05': 0.0,
        'NTO_030_060_95': 0.0,
        'NTO_030_060_EV': 0.0,
        'NTO_060_100_05': 0.0,
        'NTO_060_100_95': 0.0,
        'NTO_060_100_EV': 0.0,
        'NTO_100_200_05': 0.0,
        'NTO_100_200_95': 0.0,
        'NTO_100_200_EV': 0.0,
        'PTO_000_005_05': 0.0,
        'PTO_000_005_95': 0.0,
        'PTO_000_005_EV': 0.0,
        'PTO_005_015_05': 0.0,
        'PTO_005_015_95': 0.0,
        'PTO_005_015_EV': 0.0,
        'PTO_015_030_05': 0.0,
        'PTO_015_030_95': 0.0,
        'PTO_015_030_EV': 0.0,
        'PTO_030_060_05': 0.0,
        'PTO_030_060_95': 0.0,
        'PTO_030_060_EV': 0.0,
        'PTO_060_100_05': 0.0,
        'PTO_060_100_95': 0.0,
        'PTO_060_100_EV': 0.0,
        'PTO_100_200_05': 0.0,
        'PTO_100_200_95': 0.0,
        'PTO_100_200_EV': 0.0,
        'SLT_000_005_05': 0.0,
        'SLT_000_005_95': 0.0,
        'SLT_000_005_EV': 0.0,
        'SLT_005_015_05': 0.0,
        'SLT_005_015_95': 0.0,
        'SLT_005_015_EV': 0.0,
        'SLT_015_030_05': 0.0,
        'SLT_015_030_95': 0.0,
        'SLT_015_030_EV': 0.0,
        'SLT_030_060_05': 0.0,
        'SLT_030_060_95': 0.0,
        'SLT_030_060_EV': 0.0,
        'SLT_060_100_05': 0.0,
        'SLT_060_100_95': 0.0,
        'SLT_060_100_EV': 0.0,
        'SLT_100_200_05': 0.0,
        'SLT_100_200_95': 0.0,
        'SLT_100_200_EV': 0.0,
        'SND_000_005_05': 0.0,
        'SND_000_005_95': 0.0,
        'SND_000_005_EV': 0.0,
        'SND_005_015_05': 0.0,
        'SND_005_015_95': 0.0,
        'SND_005_015_EV': 0.0,
        'SND_015_030_05': 0.0,
        'SND_015_030_95': 0.0,
        'SND_015_030_EV': 0.0,
        'SND_030_060_05': 0.0,
        'SND_030_060_95': 0.0,
        'SND_030_060_EV': 0.0,
        'SND_060_100_05': 0.0,
        'SND_060_100_95': 0.0,
        'SND_060_100_EV': 0.0,
        'SND_100_200_05': 0.0,
        'SND_100_200_95': 0.0,
        'SND_100_200_EV': 0.0,
        'SOC_000_005_05': 0.0,
        'SOC_000_005_95': 0.0,
        'SOC_000_005_EV': 0.0,
        'SOC_005_015_05': 0.0,
        'SOC_005_015_95': 0.0,
        'SOC_005_015_EV': 0.0,
        'SOC_015_030_05': 0.0,
        'SOC_015_030_95': 0.0,
        'SOC_015_030_EV': 0.0,
        'SOC_030_060_05': 0.0,
        'SOC_030_060_95': 0.0,
        'SOC_030_060_EV': 0.0,
        'SOC_060_100_05': 0.0,
        'SOC_060_100_95': 0.0,
        'SOC_060_100_EV': 0.0,
        'SOC_100_200_05': 0.0,
        'SOC_100_200_95': 0.0,
        'SOC_100_200_EV': 0.0,
        'pHc_000_005_05': 0.0,
        'pHc_000_005_95': 0.0,
        'pHc_000_005_EV': 0.0,
        'pHc_005_015_05': 0.0,
        'pHc_005_015_95': 0.0,
        'pHc_005_015_EV': 0.0,
        'pHc_015_030_05': 0.0,
        'pHc_015_030_95': 0.0,
        'pHc_015_030_EV': 0.0,
        'pHc_030_060_05': 0.0,
        'pHc_030_060_95': 0.0,
        'pHc_030_060_EV': 0.0,
        'pHc_060_100_05': 0.0,
        'pHc_060_100_95': 0.0,
        'pHc_060_100_EV': 0.0,
        'pHc_100_200_05': 0.0,
        'pHc_100_200_95': 0.0,
        'pHc_100_200_EV': 0.0
    },
    'CSP/ERGo/1_0/Global/ALOS_CHILI': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/Global/ALOS_landforms': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/Global/ALOS_mTPI': {
        'AVE': 0.0
    },
    'CSP/ERGo/1_0/Global/ALOS_topoDiversity': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/Global/SRTM_CHILI': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/Global/SRTM_landforms': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/Global/SRTM_mTPI': {
        'elevation': 0.0
    },
    'CSP/ERGo/1_0/Global/SRTM_topoDiversity': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/US/CHILI': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/US/landforms': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/US/lithology': {
        'b1': 0.0
    },
    'CSP/ERGo/1_0/US/mTPI': {
        'elevation': 0.0
    },
    'CSP/ERGo/1_0/US/physioDiversity': {
        'b1': 0.0
    },
    'CSP/ERGo/1_0/US/physiography': {
        'constant': 0.0
    },
    'CSP/ERGo/1_0/US/topoDiversity': {
        'constant': 0.0
    },
    'CSP/HM/GlobalHumanModification': {
        'gHM': 0.0
    },
    'DLR/WSF/WSF2015/v1': {
        'settlement': 0.0
    },
    'DOE/ORNL/LandScan_HD/Ukraine_202201': {
        'population': 0.0
    },
    'ECMWF/CAMS/NRT': {
        'black_carbon_aerosol_optical_depth_at_550nm_surface': 0.0,
        'dust_aerosol_optical_depth_at_550nm_surface': 0.0,
        'gems_total_column_ozone_surface': 0.0,
        'organic_matter_aerosol_optical_depth_at_550nm_surface': 0.0,
        'particulate_matter_d_less_than_10_um_surface': 0.0,
        'particulate_matter_d_less_than_1_um_surface': 0.0,
        'particulate_matter_d_less_than_25_um_surface': 0.0,
        'sea_salt_aerosol_optical_depth_at_550nm_surface': 0.0,
        'sulphate_aerosol_optical_depth_at_550nm_surface': 0.0,
        'total_aerosol_optical_depth_at_1240nm_surface': 0.0,
        'total_aerosol_optical_depth_at_469nm_surface': 0.0,
        'total_aerosol_optical_depth_at_550nm_surface': 0.0,
        'total_aerosol_optical_depth_at_670nm_surface': 0.0,
        'total_aerosol_optical_depth_at_865nm_surface': 0.0,
        'total_column__ethane_surface': 0.0,
        'total_column__isoprene_surface': 0.0,
        'total_column__peroxyacetyl_nitrate_surface': 0.0,
        'total_column_carbon_monoxide_surface': 0.0,
        'total_column_formaldehyde_surface': 0.0,
        'total_column_hydrogen_peroxide_surface': 0.0,
        'total_column_hydroxyl_radical_surface': 0.0,
        'total_column_methane_surface': 0.0,
        'total_column_nitric_acid_surface': 0.0,
        'total_column_nitrogen_dioxide_surface': 0.0,
        'total_column_nitrogen_monoxide_surface': 0.0,
        'total_column_propane_surface': 0.0,
        'total_column_sulphur_dioxide_surface': 0.0,
        'uv_biologically_effective_dose_surface': 0.0,
        'var98-0-210-250_surface': 0.0,
        'var98-0-210-251_surface': 0.0
    },
    'ECMWF/ERA5/DAILY': {
        'dewpoint_2m_temperature': 0.0,
        'maximum_2m_air_temperature': 0.0,
        'mean_2m_air_temperature': 0.0,
        'mean_sea_level_pressure': 0.0,
        'minimum_2m_air_temperature': 0.0,
        'surface_pressure': 0.0,
        'total_precipitation': 0.0,
        'u_component_of_wind_10m': 0.0,
        'v_component_of_wind_10m': 0.0
    },
    'ECMWF/ERA5/MONTHLY': {
        'dewpoint_2m_temperature': 0.0,
        'maximum_2m_air_temperature': 0.0,
        'mean_2m_air_temperature': 0.0,
        'mean_sea_level_pressure': 0.0,
        'minimum_2m_air_temperature': 0.0,
        'surface_pressure': 0.0,
        'total_precipitation': 0.0,
        'u_component_of_wind_10m': 0.0,
        'v_component_of_wind_10m': 0.0
    },
    'ECMWF/ERA5_LAND/HOURLY': {
        'dewpoint_temperature_2m': 0.0,
        'evaporation_from_bare_soil': 0.0,
        'evaporation_from_bare_soil_hourly': 0.0,
        'evaporation_from_open_water_surfaces_excluding_oceans': 0.0,
        'evaporation_from_open_water_surfaces_excluding_oceans_hourly': 0.0,
        'evaporation_from_the_top_of_canopy': 0.0,
        'evaporation_from_the_top_of_canopy_hourly': 0.0,
        'evaporation_from_vegetation_transpiration': 0.0,
        'evaporation_from_vegetation_transpiration_hourly': 0.0,
        'forecast_albedo': 0.0,
        'lake_bottom_temperature': 0.0,
        'lake_ice_depth': 0.0,
        'lake_ice_temperature': 0.0,
        'lake_mix_layer_depth': 0.0,
        'lake_mix_layer_temperature': 0.0,
        'lake_shape_factor': 0.0,
        'lake_total_layer_temperature': 0.0,
        'leaf_area_index_high_vegetation': 0.0,
        'leaf_area_index_low_vegetation': 0.0,
        'potential_evaporation': 0.0,
        'potential_evaporation_hourly': 0.0,
        'runoff': 0.0,
        'runoff_hourly': 0.0,
        'skin_reservoir_content': 0.0,
        'skin_temperature': 0.0,
        'snow_albedo': 0.0,
        'snow_cover': 0.0,
        'snow_density': 0.0,
        'snow_depth': 0.0,
        'snow_depth_water_equivalent': 0.0,
        'snow_evaporation': 0.0,
        'snow_evaporation_hourly': 0.0,
        'snowfall': 0.0,
        'snowfall_hourly': 0.0,
        'snowmelt': 0.0,
        'snowmelt_hourly': 0.0,
        'soil_temperature_level_1': 0.0,
        'soil_temperature_level_2': 0.0,
        'soil_temperature_level_3': 0.0,
        'soil_temperature_level_4': 0.0,
        'sub_surface_runoff': 0.0,
        'sub_surface_runoff_hourly': 0.0,
        'surface_latent_heat_flux': 0.0,
        'surface_latent_heat_flux_hourly': 0.0,
        'surface_net_solar_radiation': 0.0,
        'surface_net_solar_radiation_hourly': 0.0,
        'surface_net_thermal_radiation': 0.0,
        'surface_net_thermal_radiation_hourly': 0.0,
        'surface_pressure': 0.0,
        'surface_runoff': 0.0,
        'surface_runoff_hourly': 0.0,
        'surface_sensible_heat_flux': 0.0,
        'surface_sensible_heat_flux_hourly': 0.0,
        'surface_solar_radiation_downwards': 0.0,
        'surface_solar_radiation_downwards_hourly': 0.0,
        'surface_thermal_radiation_downwards': 0.0,
        'surface_thermal_radiation_downwards_hourly': 0.0,
        'temperature_2m': 0.0,
        'temperature_of_snow_layer': 0.0,
        'total_evaporation': 0.0,
        'total_evaporation_hourly': 0.0,
        'total_precipitation': 0.0,
        'total_precipitation_hourly': 0.0,
        'u_component_of_wind_10m': 0.0,
        'v_component_of_wind_10m': 0.0,
        'volumetric_soil_water_layer_1': 0.0,
        'volumetric_soil_water_layer_2': 0.0,
        'volumetric_soil_water_layer_3': 0.0,
        'volumetric_soil_water_layer_4': 0.0
    },
    'ECMWF/ERA5_LAND/MONTHLY': {
        'dewpoint_temperature_2m': 0.0,
        'evaporation_from_bare_soil': 0.0,
        'evaporation_from_open_water_surfaces_excluding_oceans': 0.0,
        'evaporation_from_the_top_of_canopy': 0.0,
        'evaporation_from_vegetation_transpiration': 0.0,
        'forecast_albedo': 0.0,
        'lake_bottom_temperature': 0.0,
        'lake_ice_depth': 0.0,
        'lake_ice_temperature': 0.0,
        'lake_mix_layer_depth': 0.0,
        'lake_mix_layer_temperature': 0.0,
        'lake_shape_factor': 0.0,
        'lake_total_layer_temperature': 0.0,
        'leaf_area_index_high_vegetation': 0.0,
        'leaf_area_index_low_vegetation': 0.0,
        'potential_evaporation': 0.0,
        'runoff': 0.0,
        'skin_reservoir_content': 0.0,
        'skin_temperature': 0.0,
        'snow_albedo': 0.0,
        'snow_cover': 0.0,
        'snow_density': 0.0,
        'snow_depth': 0.0,
        'snow_depth_water_equivalent': 0.0,
        'snow_evaporation': 0.0,
        'snowfall': 0.0,
        'snowmelt': 0.0,
        'soil_temperature_level_1': 0.0,
        'soil_temperature_level_2': 0.0,
        'soil_temperature_level_3': 0.0,
        'soil_temperature_level_4': 0.0,
        'sub_surface_runoff': 0.0,
        'surface_latent_heat_flux': 0.0,
        'surface_net_solar_radiation': 0.0,
        'surface_net_thermal_radiation': 0.0,
        'surface_pressure': 0.0,
        'surface_runoff': 0.0,
        'surface_sensible_heat_flux': 0.0,
        'surface_solar_radiation_downwards': 0.0,
        'surface_thermal_radiation_downwards': 0.0,
        'temperature_2m': 0.0,
        'temperature_of_snow_layer': 0.0,
        'total_evaporation': 0.0,
        'total_precipitation': 0.0,
        'u_component_of_wind_10m': 0.0,
        'v_component_of_wind_10m': 0.0,
        'volumetric_soil_water_layer_1': 0.0,
        'volumetric_soil_water_layer_2': 0.0,
        'volumetric_soil_water_layer_3': 0.0,
        'volumetric_soil_water_layer_4': 0.0
    },
    'ECMWF/ERA5_LAND/MONTHLY_BY_HOUR': {
        'dewpoint_temperature_2m': 0.0,
        'evaporation_from_bare_soil': 0.0,
        'evaporation_from_bare_soil_hourly': 0.0,
        'evaporation_from_open_water_surfaces_excluding_oceans': 0.0,
        'evaporation_from_open_water_surfaces_excluding_oceans_hourly': 0.0,
        'evaporation_from_the_top_of_canopy': 0.0,
        'evaporation_from_the_top_of_canopy_hourly': 0.0,
        'evaporation_from_vegetation_transpiration': 0.0,
        'evaporation_from_vegetation_transpiration_hourly': 0.0,
        'forecast_albedo': 0.0,
        'lake_bottom_temperature': 0.0,
        'lake_ice_depth': 0.0,
        'lake_ice_temperature': 0.0,
        'lake_mix_layer_depth': 0.0,
        'lake_mix_layer_temperature': 0.0,
        'lake_shape_factor': 0.0,
        'lake_total_layer_temperature': 0.0,
        'leaf_area_index_high_vegetation': 0.0,
        'leaf_area_index_low_vegetation': 0.0,
        'potential_evaporation': 0.0,
        'potential_evaporation_hourly': 0.0,
        'runoff': 0.0,
        'runoff_hourly': 0.0,
        'skin_reservoir_content': 0.0,
        'skin_temperature': 0.0,
        'snow_albedo': 0.0,
        'snow_cover': 0.0,
        'snow_density': 0.0,
        'snow_depth': 0.0,
        'snow_depth_water_equivalent': 0.0,
        'snow_evaporation': 0.0,
        'snow_evaporation_hourly': 0.0,
        'snowfall': 0.0,
        'snowfall_hourly': 0.0,
        'snowmelt': 0.0,
        'snowmelt_hourly': 0.0,
        'soil_temperature_level_1': 0.0,
        'soil_temperature_level_2': 0.0,
        'soil_temperature_level_3': 0.0,
        'soil_temperature_level_4': 0.0,
        'sub_surface_runoff': 0.0,
        'sub_surface_runoff_hourly': 0.0,
        'surface_latent_heat_flux': 0.0,
        'surface_latent_heat_flux_hourly': 0.0,
        'surface_net_solar_radiation': 0.0,
        'surface_net_solar_radiation_hourly': 0.0,
        'surface_net_thermal_radiation': 0.0,
        'surface_net_thermal_radiation_hourly': 0.0,
        'surface_pressure': 0.0,
        'surface_runoff': 0.0,
        'surface_runoff_hourly': 0.0,
        'surface_sensible_heat_flux': 0.0,
        'surface_sensible_heat_flux_hourly': 0.0,
        'surface_solar_radiation_downwards': 0.0,
        'surface_solar_radiation_downwards_hourly': 0.0,
        'surface_thermal_radiation_downwards': 0.0,
        'surface_thermal_radiation_downwards_hourly': 0.0,
        'temperature_2m': 0.0,
        'temperature_of_snow_layer': 0.0,
        'total_evaporation': 0.0,
        'total_evaporation_hourly': 0.0,
        'total_precipitation': 0.0,
        'total_precipitation_hourly': 0.0,
        'u_component_of_wind_10m': 0.0,
        'v_component_of_wind_10m': 0.0,
        'volumetric_soil_water_layer_1': 0.0,
        'volumetric_soil_water_layer_2': 0.0,
        'volumetric_soil_water_layer_3': 0.0,
        'volumetric_soil_water_layer_4': 0.0
    },
    'EO1/HYPERION': {
        'B008': 0.0,
        'B009': 0.0,
        'B010': 0.0,
        'B011': 0.0,
        'B012': 0.0,
        'B013': 0.0,
        'B014': 0.0,
        'B015': 0.0,
        'B016': 0.0,
        'B017': 0.0,
        'B018': 0.0,
        'B019': 0.0,
        'B020': 0.0,
        'B021': 0.0,
        'B022': 0.0,
        'B023': 0.0,
        'B024': 0.0,
        'B025': 0.0,
        'B026': 0.0,
        'B027': 0.0,
        'B028': 0.0,
        'B029': 0.0,
        'B030': 0.0,
        'B031': 0.0,
        'B032': 0.0,
        'B033': 0.0,
        'B034': 0.0,
        'B035': 0.0,
        'B036': 0.0,
        'B037': 0.0,
        'B038': 0.0,
        'B039': 0.0,
        'B040': 0.0,
        'B041': 0.0,
        'B042': 0.0,
        'B043': 0.0,
        'B044': 0.0,
        'B045': 0.0,
        'B046': 0.0,
        'B047': 0.0,
        'B048': 0.0,
        'B049': 0.0,
        'B050': 0.0,
        'B051': 0.0,
        'B052': 0.0,
        'B053': 0.0,
        'B054': 0.0,
        'B055': 0.0,
        'B056': 0.0,
        'B057': 0.0,
        'B077': 0.0,
        'B078': 0.0,
        'B079': 0.0,
        'B080': 0.0,
        'B081': 0.0,
        'B082': 0.0,
        'B083': 0.0,
        'B084': 0.0,
        'B085': 0.0,
        'B086': 0.0,
        'B087': 0.0,
        'B088': 0.0,
        'B089': 0.0,
        'B090': 0.0,
        'B091': 0.0,
        'B092': 0.0,
        'B093': 0.0,
        'B094': 0.0,
        'B095': 0.0,
        'B096': 0.0,
        'B097': 0.0,
        'B098': 0.0,
        'B099': 0.0,
        'B100': 0.0,
        'B101': 0.0,
        'B102': 0.0,
        'B103': 0.0,
        'B104': 0.0,
        'B105': 0.0,
        'B106': 0.0,
        'B107': 0.0,
        'B108': 0.0,
        'B109': 0.0,
        'B110': 0.0,
        'B111': 0.0,
        'B112': 0.0,
        'B113': 0.0,
        'B114': 0.0,
        'B115': 0.0,
        'B116': 0.0,
        'B117': 0.0,
        'B118': 0.0,
        'B119': 0.0,
        'B120': 0.0,
        'B121': 0.0,
        'B122': 0.0,
        'B123': 0.0,
        'B124': 0.0,
        'B125': 0.0,
        'B126': 0.0,
        'B127': 0.0,
        'B128': 0.0,
        'B129': 0.0,
        'B130': 0.0,
        'B131': 0.0,
        'B132': 0.0,
        'B133': 0.0,
        'B134': 0.0,
        'B135': 0.0,
        'B136': 0.0,
        'B137': 0.0,
        'B138': 0.0,
        'B139': 0.0,
        'B140': 0.0,
        'B141': 0.0,
        'B142': 0.0,
        'B143': 0.0,
        'B144': 0.0,
        'B145': 0.0,
        'B146': 0.0,
        'B147': 0.0,
        'B148': 0.0,
        'B149': 0.0,
        'B150': 0.0,
        'B151': 0.0,
        'B152': 0.0,
        'B153': 0.0,
        'B154': 0.0,
        'B155': 0.0,
        'B156': 0.0,
        'B157': 0.0,
        'B158': 0.0,
        'B159': 0.0,
        'B160': 0.0,
        'B161': 0.0,
        'B162': 0.0,
        'B163': 0.0,
        'B164': 0.0,
        'B165': 0.0,
        'B166': 0.0,
        'B167': 0.0,
        'B168': 0.0,
        'B169': 0.0,
        'B170': 0.0,
        'B171': 0.0,
        'B172': 0.0,
        'B173': 0.0,
        'B174': 0.0,
        'B175': 0.0,
        'B176': 0.0,
        'B177': 0.0,
        'B178': 0.0,
        'B179': 0.0,
        'B180': 0.0,
        'B181': 0.0,
        'B182': 0.0,
        'B183': 0.0,
        'B184': 0.0,
        'B185': 0.0,
        'B186': 0.0,
        'B187': 0.0,
        'B188': 0.0,
        'B189': 0.0,
        'B190': 0.0,
        'B191': 0.0,
        'B192': 0.0,
        'B193': 0.0,
        'B194': 0.0,
        'B195': 0.0,
        'B196': 0.0,
        'B197': 0.0,
        'B198': 0.0,
        'B199': 0.0,
        'B200': 0.0,
        'B201': 0.0,
        'B202': 0.0,
        'B203': 0.0,
        'B204': 0.0,
        'B205': 0.0,
        'B206': 0.0,
        'B207': 0.0,
        'B208': 0.0,
        'B209': 0.0,
        'B210': 0.0,
        'B211': 0.0,
        'B212': 0.0,
        'B213': 0.0,
        'B214': 0.0,
        'B215': 0.0,
        'B216': 0.0,
        'B217': 0.0,
        'B218': 0.0,
        'B219': 0.0,
        'B220': 0.0,
        'B221': 0.0,
        'B222': 0.0,
        'B223': 0.0,
        'B224': 0.0
    },
    'ESA/CCI/FireCCI/5_1': {
        'BurnDate': 0.0,
        'ConfidenceLevel': 0.0,
        'LandCover': 0.0,
        'ObservedFlag': 0.0
    },
    'ESA/GLOBCOVER_L4_200901_200912_V2_3': {
        'landcover': 0.0,
        'qa': 0.0
    },
    'ESA/WorldCover/v100': {
        'Map': 0.0
    },
    'ESA/WorldCover/v200': {
        'Map': 0.0
    },
    'FAO/GHG/1/DROSA_A': {
        'cropland': 0.0,
        'grassland': 0.0
    },
    'FAO/GHG/1/DROSE_A': {
        'croplandc': 0.0,
        'croplandn2o': 0.0,
        'grasslandc': 0.0,
        'grasslandn2o': 0.0
    },
    'FAO/SOFO/1/FPP': {
        'FPP_1km': 0.0,
        'FPP_5km': 0.0
    },
    'FAO/SOFO/1/TPP': {
        'TPP_1km': 0.0,
        'TPP_1km_cropland': 0.0,
        'TPP_500m': 0.0,
        'TPP_500m_cropland': 0.0
    },
    'FAO/WAPOR/2/L1_AETI_D': {
        'L1_AETI_D': 0.0
    },
    'FAO/WAPOR/2/L1_E_D': {
        'L1_E_D': 0.0
    },
    'FAO/WAPOR/2/L1_I_D': {
        'L1_I_D': 0.0
    },
    'FAO/WAPOR/2/L1_NPP_D': {
        'L1_NPP_D': 0.0
    },
    'FAO/WAPOR/2/L1_RET_D': {
        'L1_RET_D': 0.0
    },
    'FAO/WAPOR/2/L1_RET_E': {
        'L1_RET_E': 0.0
    },
    'FAO/WAPOR/2/L1_T_D': {
        'L1_T_D': 0.0
    },
    'FIRMS': {
        'T21': 0.0,
        'confidence': 0.0,
        'line_number': 0.0
    },
    'FORMA/FORMA_500m': {
        'constant': 0.0
    },
    'Finland/MAVI/VV/50cm': {
        'G': 0.0,
        'N': 0.0,
        'R': 0.0
    },
    'Finland/SMK/V/50cm': {
        'B': 0.0,
        'G': 0.0,
        'R': 0.0
    },
    'Finland/SMK/VV/50cm': {
        'G': 0.0,
        'N': 0.0,
        'R': 0.0
    },
    'GFW/GFF/V1/fishing_hours': {
        'drifting_longlines': 0.0,
        'fixed_gear': 0.0,
        'other_fishing': 0.0,
        'purse_seines': 0.0,
        'squid_jigger': 0.0,
        'trawlers': 0.0
    },
    'GFW/GFF/V1/vessel_hours': {
        'drifting_longlines': 0.0,
        'fixed_gear': 0.0,
        'other_fishing': 0.0,
        'purse_seines': 0.0,
        'squid_jigger': 0.0,
        'trawlers': 0.0
    },
    'GLCF/GLS_TCC': {
        'source_index': 0.0,
        'tree_canopy_cover': 0.0,
        'uncertainty': 0.0
    },
    'GLCF/GLS_WATER': {
        'water': 0.0
    },
    'GLOBAL_FLOOD_DB/MODIS_EVENTS/V1': {
        'clear_perc': 0.0,
        'clear_views': 0.0,
        'duration': 0.0,
        'flooded': 0.0,
        'jrc_perm_water': 0.0
    },
    'GOOGLE/DYNAMICWORLD/V1': {
        'bare': 0.0,
        'built': 0.0,
        'crops': 0.0,
        'flooded_vegetation': 0.0,
        'grass': 0.0,
        'label': 0.0,
        'shrub_and_scrub': 0.0,
        'snow_and_ice': 0.0,
        'trees': 0.0,
        'water': 0.0
    },
    'GRIDMET/DROUGHT': {
        'eddi14d': 0.0,
        'eddi180d': 0.0,
        'eddi1y': 0.0,
        'eddi270d': 0.0,
        'eddi2y': 0.0,
        'eddi30d': 0.0,
        'eddi5y': 0.0,
        'eddi90d': 0.0,
        'pdsi': 0.0,
        'spei14d': 0.0,
        'spei180d': 0.0,
        'spei1y': 0.0,
        'spei270d': 0.0,
        'spei2y': 0.0,
        'spei30d': 0.0,
        'spei5y': 0.0,
        'spei90d': 0.0,
        'spi14d': 0.0,
        'spi180d': 0.0,
        'spi1y': 0.0,
        'spi270d': 0.0,
        'spi2y': 0.0,
        'spi30d': 0.0,
        'spi5y': 0.0,
        'spi90d': 0.0,
        'z': 0.0
    },
    'HYCOM/GLBu0_08/sea_surface_elevation': {
        'surface_elevation': 0.0
    },
    'HYCOM/GLBu0_08/sea_temp_salinity': {
        'salinity_0': 20,
        'salinity_10': 20,
        'salinity_100': 20,
        'salinity_1000': 20,
        'salinity_12': 20,
        'salinity_125': 20,
        'salinity_1250': 20,
        'salinity_15': 20,
        'salinity_150': 20,
        'salinity_1500': 20,
        'salinity_2': 20,
        'salinity_20': 20,
        'salinity_200': 20,
        'salinity_2000': 20,
        'salinity_25': 20,
        'salinity_250': 20,
        'salinity_2500': 20,
        'salinity_30': 20,
        'salinity_300': 20,
        'salinity_3000': 20,
        'salinity_35': 20,
        'salinity_350': 20,
        'salinity_4': 20,
        'salinity_40': 20,
        'salinity_400': 20,
        'salinity_4000': 20,
        'salinity_45': 20,
        'salinity_50': 20,
        'salinity_500': 20,
        'salinity_5000': 20,
        'salinity_6': 20,
        'salinity_60': 20,
        'salinity_600': 20,
        'salinity_70': 20,
        'salinity_700': 20,
        'salinity_8': 20,
        'salinity_80': 20,
        'salinity_800': 20,
        'salinity_90': 20,
        'salinity_900': 20,
        'water_temp_0': 20,
        'water_temp_10': 20,
        'water_temp_100': 20,
        'water_temp_1000': 20,
        'water_temp_12': 20,
        'water_temp_125': 20,
        'water_temp_1250': 20,
        'water_temp_15': 20,
        'water_temp_150': 20,
        'water_temp_1500': 20,
        'water_temp_2': 20,
        'water_temp_20': 20,
        'water_temp_200': 20,
        'water_temp_2000': 20,
        'water_temp_25': 20,
        'water_temp_250': 20,
        'water_temp_2500': 20,
        'water_temp_30': 20,
        'water_temp_300': 20,
        'water_temp_3000': 20,
        'water_temp_35': 20,
        'water_temp_350': 20,
        'water_temp_4': 20,
        'water_temp_40': 20,
        'water_temp_400': 20,
        'water_temp_4000': 20,
        'water_temp_45': 20,
        'water_temp_50': 20,
        'water_temp_500': 20,
        'water_temp_5000': 20,
        'water_temp_6': 20,
        'water_temp_60': 20,
        'water_temp_600': 20,
        'water_temp_70': 20,
        'water_temp_700': 20,
        'water_temp_8': 20,
        'water_temp_80': 20,
        'water_temp_800': 20,
        'water_temp_90': 20,
        'water_temp_900': 20
    },
    'HYCOM/GLBu0_08/sea_water_velocity': {
        'velocity_u_0': 0.0,
        'velocity_u_10': 0.0,
        'velocity_u_100': 0.0,
        'velocity_u_1000': 0.0,
        'velocity_u_12': 0.0,
        'velocity_u_125': 0.0,
        'velocity_u_1250': 0.0,
        'velocity_u_15': 0.0,
        'velocity_u_150': 0.0,
        'velocity_u_1500': 0.0,
        'velocity_u_2': 0.0,
        'velocity_u_20': 0.0,
        'velocity_u_200': 0.0,
        'velocity_u_2000': 0.0,
        'velocity_u_25': 0.0,
        'velocity_u_250': 0.0,
        'velocity_u_2500': 0.0,
        'velocity_u_30': 0.0,
        'velocity_u_300': 0.0,
        'velocity_u_3000': 0.0,
        'velocity_u_35': 0.0,
        'velocity_u_350': 0.0,
        'velocity_u_4': 0.0,
        'velocity_u_40': 0.0,
        'velocity_u_400': 0.0,
        'velocity_u_4000': 0.0,
        'velocity_u_45': 0.0,
        'velocity_u_50': 0.0,
        'velocity_u_500': 0.0,
        'velocity_u_5000': 0.0,
        'velocity_u_6': 0.0,
        'velocity_u_60': 0.0,
        'velocity_u_600': 0.0,
        'velocity_u_70': 0.0,
        'velocity_u_700': 0.0,
        'velocity_u_8': 0.0,
        'velocity_u_80': 0.0,
        'velocity_u_800': 0.0,
        'velocity_u_90': 0.0,
        'velocity_u_900': 0.0,
        'velocity_v_0': 0.0,
        'velocity_v_10': 0.0,
        'velocity_v_100': 0.0,
        'velocity_v_1000': 0.0,
        'velocity_v_12': 0.0,
        'velocity_v_125': 0.0,
        'velocity_v_1250': 0.0,
        'velocity_v_15': 0.0,
        'velocity_v_150': 0.0,
        'velocity_v_1500': 0.0,
        'velocity_v_2': 0.0,
        'velocity_v_20': 0.0,
        'velocity_v_200': 0.0,
        'velocity_v_2000': 0.0,
        'velocity_v_25': 0.0,
        'velocity_v_250': 0.0,
        'velocity_v_2500': 0.0,
        'velocity_v_30': 0.0,
        'velocity_v_300': 0.0,
        'velocity_v_3000': 0.0,
        'velocity_v_35': 0.0,
        'velocity_v_350': 0.0,
        'velocity_v_4': 0.0,
        'velocity_v_40': 0.0,
        'velocity_v_400': 0.0,
        'velocity_v_4000': 0.0,
        'velocity_v_45': 0.0,
        'velocity_v_50': 0.0,
        'velocity_v_500': 0.0,
        'velocity_v_5000': 0.0,
        'velocity_v_6': 0.0,
        'velocity_v_60': 0.0,
        'velocity_v_600': 0.0,
        'velocity_v_70': 0.0,
        'velocity_v_700': 0.0,
        'velocity_v_8': 0.0,
        'velocity_v_80': 0.0,
        'velocity_v_800': 0.0,
        'velocity_v_90': 0.0,
        'velocity_v_900': 0.0
    },
    'HYCOM/sea_surface_elevation': {
        'surface_elevation': 0.0
    },
    'HYCOM/sea_temp_salinity': {
        'salinity_0': 20,
        'salinity_10': 20,
        'salinity_100': 20,
        'salinity_1000': 20,
        'salinity_12': 20,
        'salinity_125': 20,
        'salinity_1250': 20,
        'salinity_15': 20,
        'salinity_150': 20,
        'salinity_1500': 20,
        'salinity_2': 20,
        'salinity_20': 20,
        'salinity_200': 20,
        'salinity_2000': 20,
        'salinity_25': 20,
        'salinity_250': 20,
        'salinity_2500': 20,
        'salinity_30': 20,
        'salinity_300': 20,
        'salinity_3000': 20,
        'salinity_35': 20,
        'salinity_350': 20,
        'salinity_4': 20,
        'salinity_40': 20,
        'salinity_400': 20,
        'salinity_4000': 20,
        'salinity_45': 20,
        'salinity_50': 20,
        'salinity_500': 20,
        'salinity_5000': 20,
        'salinity_6': 20,
        'salinity_60': 20,
        'salinity_600': 20,
        'salinity_70': 20,
        'salinity_700': 20,
        'salinity_8': 20,
        'salinity_80': 20,
        'salinity_800': 20,
        'salinity_90': 20,
        'salinity_900': 20,
        'water_temp_0': 20,
        'water_temp_10': 20,
        'water_temp_100': 20,
        'water_temp_1000': 20,
        'water_temp_12': 20,
        'water_temp_125': 20,
        'water_temp_1250': 20,
        'water_temp_15': 20,
        'water_temp_150': 20,
        'water_temp_1500': 20,
        'water_temp_2': 20,
        'water_temp_20': 20,
        'water_temp_200': 20,
        'water_temp_2000': 20,
        'water_temp_25': 20,
        'water_temp_250': 20,
        'water_temp_2500': 20,
        'water_temp_30': 20,
        'water_temp_300': 20,
        'water_temp_3000': 20,
        'water_temp_35': 20,
        'water_temp_350': 20,
        'water_temp_4': 20,
        'water_temp_40': 20,
        'water_temp_400': 20,
        'water_temp_4000': 20,
        'water_temp_45': 20,
        'water_temp_50': 20,
        'water_temp_500': 20,
        'water_temp_5000': 20,
        'water_temp_6': 20,
        'water_temp_60': 20,
        'water_temp_600': 20,
        'water_temp_70': 20,
        'water_temp_700': 20,
        'water_temp_8': 20,
        'water_temp_80': 20,
        'water_temp_800': 20,
        'water_temp_90': 20,
        'water_temp_900': 20
    },
    'HYCOM/sea_water_velocity': {
        'velocity_u_0': 0.0,
        'velocity_u_10': 0.0,
        'velocity_u_100': 0.0,
        'velocity_u_1000': 0.0,
        'velocity_u_12': 0.0,
        'velocity_u_125': 0.0,
        'velocity_u_1250': 0.0,
        'velocity_u_15': 0.0,
        'velocity_u_150': 0.0,
        'velocity_u_1500': 0.0,
        'velocity_u_2': 0.0,
        'velocity_u_20': 0.0,
        'velocity_u_200': 0.0,
        'velocity_u_2000': 0.0,
        'velocity_u_25': 0.0,
        'velocity_u_250': 0.0,
        'velocity_u_2500': 0.0,
        'velocity_u_30': 0.0,
        'velocity_u_300': 0.0,
        'velocity_u_3000': 0.0,
        'velocity_u_35': 0.0,
        'velocity_u_350': 0.0,
        'velocity_u_4': 0.0,
        'velocity_u_40': 0.0,
        'velocity_u_400': 0.0,
        'velocity_u_4000': 0.0,
        'velocity_u_45': 0.0,
        'velocity_u_50': 0.0,
        'velocity_u_500': 0.0,
        'velocity_u_5000': 0.0,
        'velocity_u_6': 0.0,
        'velocity_u_60': 0.0,
        'velocity_u_600': 0.0,
        'velocity_u_70': 0.0,
        'velocity_u_700': 0.0,
        'velocity_u_8': 0.0,
        'velocity_u_80': 0.0,
        'velocity_u_800': 0.0,
        'velocity_u_90': 0.0,
        'velocity_u_900': 0.0,
        'velocity_v_0': 0.0,
        'velocity_v_10': 0.0,
        'velocity_v_100': 0.0,
        'velocity_v_1000': 0.0,
        'velocity_v_12': 0.0,
        'velocity_v_125': 0.0,
        'velocity_v_1250': 0.0,
        'velocity_v_15': 0.0,
        'velocity_v_150': 0.0,
        'velocity_v_1500': 0.0,
        'velocity_v_2': 0.0,
        'velocity_v_20': 0.0,
        'velocity_v_200': 0.0,
        'velocity_v_2000': 0.0,
        'velocity_v_25': 0.0,
        'velocity_v_250': 0.0,
        'velocity_v_2500': 0.0,
        'velocity_v_30': 0.0,
        'velocity_v_300': 0.0,
        'velocity_v_3000': 0.0,
        'velocity_v_35': 0.0,
        'velocity_v_350': 0.0,
        'velocity_v_4': 0.0,
        'velocity_v_40': 0.0,
        'velocity_v_400': 0.0,
        'velocity_v_4000': 0.0,
        'velocity_v_45': 0.0,
        'velocity_v_50': 0.0,
        'velocity_v_500': 0.0,
        'velocity_v_5000': 0.0,
        'velocity_v_6': 0.0,
        'velocity_v_60': 0.0,
        'velocity_v_600': 0.0,
        'velocity_v_70': 0.0,
        'velocity_v_700': 0.0,
        'velocity_v_8': 0.0,
        'velocity_v_80': 0.0,
        'velocity_v_800': 0.0,
        'velocity_v_90': 0.0,
        'velocity_v_900': 0.0
    },
    'IDAHO_EPSCOR/GRIDMET': {
        'bi': 0.0,
        'erc': 0.0,
        'eto': 0.0,
        'etr': 0.0,
        'fm100': 0.0,
        'fm1000': 0.0,
        'pr': 0.0,
        'rmax': 0.0,
        'rmin': 0.0,
        'sph': 0.0,
        'srad': 0.0,
        'th': 0.0,
        'tmmn': 0.0,
        'tmmx': 0.0,
        'vpd': 0.0,
        'vs': 0.0
    },
    'IDAHO_EPSCOR/MACAv2_METDATA': {
        'huss': 0.0,
        'pr': 0.0,
        'rhsmax': 0.0,
        'rhsmin': 0.0,
        'rsds': 0.0,
        'tasmax': 0.0,
        'tasmin': 0.0,
        'uas': 0.0,
        'vas': 0.0
    },
    'IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY': {
        'huss': 0.0,
        'pr': 0.0,
        'rsds': 0.0,
        'tasmax': 0.0,
        'tasmin': 0.0,
        'was': 0.0
    },
    'IDAHO_EPSCOR/PDSI': {
        'pdsi': 0.0
    },
    'IDAHO_EPSCOR/TERRACLIMATE': {
        'aet': 0.0,
        'def': 0.0,
        'pdsi': 0.0,
        'pet': 0.0,
        'pr': 0.0,
        'ro': 0.0,
        'soil': 0.0,
        'srad': 0.0,
        'swe': 0.0,
        'tmmn': 0.0,
        'tmmx': 0.0,
        'vap': 0.0,
        'vpd': 0.0,
        'vs': 0.0
    },
    'IGN/RGE_ALTI/1M/2_0': {
        'DST': 0.0,
        'MNT': 0.0,
        'SRC': 0.0
    },
    'ISDASOIL/Africa/v1/aluminium_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/bedrock_depth': {
        'mean_0_200': 0.0,
        'stdev_0_200': 0.0
    },
    'ISDASOIL/Africa/v1/bulk_density': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/calcium_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/carbon_organic': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/carbon_total': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/cation_exchange_capacity': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/clay_content': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/fcc': {
        'fcc': 0.0
    },
    'ISDASOIL/Africa/v1/iron_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/magnesium_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/nitrogen_total': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/ph': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/phosphorus_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/potassium_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/sand_content': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/silt_content': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/stone_content': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/sulphur_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/texture_class': {
        'texture_0_20': 0.0,
        'texture_20_50': 0.0
    },
    'ISDASOIL/Africa/v1/zinc_extractable': {
        'mean_0_20': 0.0,
        'mean_20_50': 0.0,
        'stdev_0_20': 0.0,
        'stdev_20_50': 0.0
    },
    'JAXA/ALOS/AVNIR-2/ORI': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0
    },
    'JAXA/ALOS/AW3D30/V1_1': {
        'AVE': 0.0,
        'AVE_MSK': 0.0,
        'AVE_STK': 0.0,
        'MED': 0.0,
        'MED_MSK': 0.0,
        'MED_STK': 0.0
    },
    'JAXA/ALOS/AW3D30/V2_1': {
        'AVE_DSM': 0.0,
        'AVE_MSK': 0.0,
        'AVE_STK': 0.0
    },
    'JAXA/ALOS/AW3D30/V2_2': {
        'AVE_DSM': 0.0,
        'AVE_MSK': 0.0,
        'AVE_STK': 0.0
    },
    'JAXA/ALOS/AW3D30/V3_2': {
        'DSM': 0.0,
        'MSK': 0.0,
        'STK': 0.0
    },
    'JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR': {
        'HH': 0.0,
        'HV': 0.0,
        'LIN': 0.0,
        'MSK': 0.0
    },
    'JAXA/ALOS/PALSAR/YEARLY/FNF': {
        'fnf': 0.0
    },
    'JAXA/ALOS/PALSAR/YEARLY/FNF4': {
        'fnf': 0.0
    },
    'JAXA/ALOS/PALSAR/YEARLY/SAR': {
        'HH': 0.0,
        'HV': 0.0,
        'angle': 0.0,
        'date': 0.0,
        'qa': 0.0
    },
    'JAXA/ALOS/PALSAR/YEARLY/SAR_EPOCH': {
        'HH': 0.0,
        'HV': 0.0,
        'angle': 0.0,
        'epoch': 0.0,
        'qa': 0.0
    },
    'JAXA/GCOM-C/L3/LAND/LAI/V1': {
        'LAI_AVE': 0.0,
        'LAI_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/LAND/LAI/V2': {
        'LAI_AVE': 0.0,
        'LAI_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/LAND/LAI/V3': {
        'LAI_AVE': 0.0,
        'LAI_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/LAND/LST/V1': {
        'LST_AVE': 0.0,
        'LST_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/LAND/LST/V2': {
        'LST_AVE': 0.0,
        'LST_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/LAND/LST/V3': {
        'LST_AVE': 0.0,
        'LST_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/OCEAN/CHLA/V1': {
        'CHLA_AVE': 0.0,
        'CHLA_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/OCEAN/CHLA/V2': {
        'CHLA_AVE': 0.0,
        'CHLA_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/OCEAN/CHLA/V3': {
        'CHLA_AVE': 0.0,
        'CHLA_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/OCEAN/SST/V1': {
        'SST_AVE': 0.0,
        'SST_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/OCEAN/SST/V2': {
        'SST_AVE': 0.0,
        'SST_QA_flag': 0.0
    },
    'JAXA/GCOM-C/L3/OCEAN/SST/V3': {
        'SST_AVE': 0.0,
        'SST_QA_flag': 0.0
    },
    'JAXA/GPM_L3/GSMaP/v6/operational': {
        'gaugeQualityInfo': 0.0,
        'hourlyPrecipRate': 0.0,
        'hourlyPrecipRateGC': 0.0,
        'observationTimeFlag': 0.0,
        'satelliteInfoFlag': 0.0
    },
    'JAXA/GPM_L3/GSMaP/v6/reanalysis': {
        'gaugeQualityInfo': 0.0,
        'hourlyPrecipRate': 0.0,
        'hourlyPrecipRateGC': 0.0,
        'observationTimeFlag': 0.0,
        'satelliteInfoFlag': 0.0
    },
    'JCU/Murray/GIC/global_tidal_wetland_change/2019': {
        'gain': 0.0,
        'gainType': 0.0,
        'gainYear': 0.0,
        'loss': 0.0,
        'lossType': 0.0,
        'lossYear': 0.0,
        'twprobabilityEnd': 0.0,
        'twprobabilityStart': 0.0
    },
    'JRC/D5/EUCROPMAP/V1': {
        'classification': 0.0
    },
    'JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1': {
        'built': 0.0,
        'cnfd': 0.0,
        'dm': 0.0
    },
    'JRC/GHSL/P2016/POP_GPW_GLOBE_V1': {
        'population_count': 0.0
    },
    'JRC/GHSL/P2016/SMOD_POP_GLOBE_V1': {
        'smod_code': 0.0
    },
    'JRC/GSW1_0/GlobalSurfaceWater': {
        'change_abs': 0.0,
        'change_norm': 0.0,
        'max_extent': 0.0,
        'occurrence': 0.0,
        'recurrence': 0.0,
        'seasonality': 0.0,
        'transition': 0.0
    },
    'JRC/GSW1_0/Metadata': {
        'detections': 0.0,
        'total_obs': 0.0,
        'valid_obs': 0.0
    },
    'JRC/GSW1_0/MonthlyHistory': {
        'water': 0.0
    },
    'JRC/GSW1_0/MonthlyRecurrence': {
        'has_observations': 0.0,
        'monthly_recurrence': 0.0
    },
    'JRC/GSW1_0/YearlyHistory': {
        'waterClass': 0.0
    },
    'JRC/GSW1_1/GlobalSurfaceWater': {
        'change_abs': 0.0,
        'change_norm': 0.0,
        'max_extent': 0.0,
        'occurrence': 0.0,
        'recurrence': 0.0,
        'seasonality': 0.0,
        'transition': 0.0
    },
    'JRC/GSW1_1/Metadata': {
        'detections': 0.0,
        'total_obs': 0.0,
        'valid_obs': 0.0
    },
    'JRC/GSW1_1/MonthlyHistory': {
        'water': 0.0
    },
    'JRC/GSW1_1/MonthlyRecurrence': {
        'has_observations': 0.0,
        'monthly_recurrence': 0.0
    },
    'JRC/GSW1_1/YearlyHistory': {
        'waterClass': 0.0
    },
    'JRC/GSW1_2/GlobalSurfaceWater': {
        'change_abs': 0.0,
        'change_norm': 0.0,
        'max_extent': 0.0,
        'occurrence': 0.0,
        'recurrence': 0.0,
        'seasonality': 0.0,
        'transition': 0.0
    },
    'JRC/GSW1_2/Metadata': {
        'detections': 0.0,
        'total_obs': 0.0,
        'valid_obs': 0.0
    },
    'JRC/GSW1_2/MonthlyHistory': {
        'water': 0.0
    },
    'JRC/GSW1_2/MonthlyRecurrence': {
        'has_observations': 0.0,
        'monthly_recurrence': 0.0
    },
    'JRC/GSW1_2/YearlyHistory': {
        'waterClass': 0.0
    },
    'JRC/GSW1_3/GlobalSurfaceWater': {
        'change_abs': 0.0,
        'change_norm': 0.0,
        'max_extent': 0.0,
        'occurrence': 0.0,
        'recurrence': 0.0,
        'seasonality': 0.0,
        'transition': 0.0
    },
    'JRC/GSW1_3/Metadata': {
        'detections': 0.0,
        'total_obs': 0.0,
        'valid_obs': 0.0
    },
    'JRC/GSW1_3/MonthlyHistory': {
        'water': 0.0
    },
    'JRC/GSW1_3/MonthlyRecurrence': {
        'has_observations': 0.0,
        'monthly_recurrence': 0.0
    },
    'JRC/GSW1_3/YearlyHistory': {
        'waterClass': 0.0
    },
    'JRC/GSW1_4/GlobalSurfaceWater': {
        'change_abs': 0.0,
        'change_norm': 0.0,
        'max_extent': 0.0,
        'occurrence': 0.0,
        'recurrence': 0.0,
        'seasonality': 0.0,
        'transition': 0.0
    },
    'JRC/GSW1_4/Metadata': {
        'detections': 0.0,
        'total_obs': 0.0,
        'valid_obs': 0.0
    },
    'JRC/GSW1_4/MonthlyHistory': {
        'water': 0.0
    },
    'JRC/GSW1_4/MonthlyRecurrence': {
        'has_observations': 0.0,
        'monthly_recurrence': 0.0
    },
    'JRC/GSW1_4/YearlyHistory': {
        'waterClass': 0.0
    },
    'KNTU/LiDARLab/IranLandCover/V1': {
        'classification': 0.0
    },
    'LANDFIRE/Fire/FRG/v1_2_0': {
        'FRG': 0.0
    },
    'LANDFIRE/Fire/MFRI/v1_2_0': {
        'MFRI': 0.0
    },
    'LANDFIRE/Fire/PLS/v1_2_0': {
        'PLS': 0.0
    },
    'LANDFIRE/Fire/PMS/v1_2_0': {
        'PMS': 0.0
    },
    'LANDFIRE/Fire/PRS/v1_2_0': {
        'PRS': 0.0
    },
    'LANDFIRE/Fire/SClass/v1_4_0': {
        'SClass': 0.0
    },
    'LANDFIRE/Fire/VCC/v1_4_0': {
        'VCC': 0.0
    },
    'LANDFIRE/Fire/VDep/v1_4_0': {
        'VDep': 0.0
    },
    'LANDFIRE/Vegetation/BPS/v1_4_0': {
        'BPS': 0.0
    },
    'LANDFIRE/Vegetation/ESP/v1_2_0/AK': {
        'ESP': 0.0
    },
    'LANDFIRE/Vegetation/ESP/v1_2_0/CONUS': {
        'ESP': 0.0
    },
    'LANDFIRE/Vegetation/ESP/v1_2_0/HI': {
        'ESP': 0.0
    },
    'LANDFIRE/Vegetation/EVC/v1_4_0': {
        'EVC': 0.0
    },
    'LANDFIRE/Vegetation/EVH/v1_4_0': {
        'EVH': 0.0
    },
    'LANDFIRE/Vegetation/EVT/v1_4_0': {
        'EVT': 0.0
    },
    'LANDSAT/GLS1975': {
        '10': 0.0,
        '20': 0.0,
        '30': 0.0,
        '40': 0.0
    },
    'LANDSAT/GLS1975_MOSAIC': {
        '10': 0.0,
        '20': 0.0,
        '30': 0.0,
        '40': 0.0
    },
    'LANDSAT/GLS2005': {
        '10': 0.0,
        '20': 0.0,
        '30': 0.0,
        '40': 0.0,
        '50': 0.0,
        '70': 0.0
    },
    'LANDSAT/GLS2005_L5': {
        '10': 0.0,
        '20': 0.0,
        '30': 0.0,
        '40': 0.0,
        '50': 0.0,
        '60': 0.0,
        '70': 0.0
    },
    'LANDSAT/GLS2005_L7': {
        '10': 0.0,
        '20': 0.0,
        '30': 0.0,
        '40': 0.0,
        '50': 0.0,
        '60': 0.0,
        '70': 0.0
    },
    'LANDSAT/LC08/C01/T1': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_RAW': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_32DAY_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_RAW': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_8DAY_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_GREENEST_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0,
        'greenness': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_RAW': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_ANNUAL_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_RT': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_RT_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T1_SR': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_aerosol': 0.0
    },
    'LANDSAT/LC08/C01/T1_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T2': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C01/T2_SR': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_aerosol': 0.0
    },
    'LANDSAT/LC08/C01/T2_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC08/C02/T1': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC08/C02/T1_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B6': -0.2,
        'SR_B7': -0.2,
        'SR_QA_AEROSOL': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B10': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LC08/C02/T1_RT': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC08/C02/T1_RT_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC08/C02/T1_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC08/C02/T2': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC08/C02/T2_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B6': -0.2,
        'SR_B7': -0.2,
        'SR_QA_AEROSOL': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B10': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LC08/C02/T2_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC09/C02/T1': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC09/C02/T1_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B6': -0.2,
        'SR_B7': -0.2,
        'SR_QA_AEROSOL': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B10': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LC09/C02/T1_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC09/C02/T2': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC09/C02/T2_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B6': -0.2,
        'SR_B7': -0.2,
        'SR_QA_AEROSOL': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B10': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LC09/C02/T2_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LC8': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_RAW': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T_32DAY_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_RAW': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T_8DAY_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_RAW': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T_ANNUAL_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LC8_L1T_TOA': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_32DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_8DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_GREENEST_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0,
        'greenness': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_ANNUAL_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_RT': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_RT_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T1_SR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_atmos_opacity': 0.0,
        'sr_cloud_qa': 0.0
    },
    'LANDSAT/LE07/C01/T1_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C01/T2_SR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_atmos_opacity': 0.0,
        'sr_cloud_qa': 0.0
    },
    'LANDSAT/LE07/C01/T2_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE07/C02/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LE07/C02/T1_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_ATMOS_OPACITY': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B7': -0.2,
        'SR_CLOUD_QA': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B6': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LE07/C02/T1_RT': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LE07/C02/T1_RT_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LE07/C02/T1_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LE07/C02/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LE07/C02/T2_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_ATMOS_OPACITY': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B7': -0.2,
        'SR_CLOUD_QA': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B6': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LE07/C02/T2_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LE7': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE7_L1T': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE7_L1T_32DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE7_L1T_8DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LE7_L1T_ANNUAL_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0
    },
    'LANDSAT/LE7_L1T_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_1': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0,
        'B8': 0.0
    },
    'LANDSAT/LE7_TOA_1YEAR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LE7_TOA_3YEAR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LE7_TOA_5YEAR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_VCID_2': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LM01/C01/T1': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM01/C01/T2': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM01/C02/T1': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM01/C02/T2': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM02/C01/T1': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM02/C01/T2': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM02/C02/T1': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM02/C02/T2': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM03/C01/T1': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM03/C01/T2': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM03/C02/T1': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM03/C02/T2': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM04/C01/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM04/C01/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM04/C02/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM04/C02/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM05/C01/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM05/C01/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM05/C02/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM05/C02/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0
    },
    'LANDSAT/LM1': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM1_L1T': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM2': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM2_L1T': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM3': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM3_L1T': {
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM4': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM4_L1T': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM5': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LM5_L1T': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LO08/C01/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LO08/C01/T1_RT': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LO08/C01/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B9': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1_32DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1_8DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_GREENEST_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0,
        'greenness': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1_ANNUAL_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T1_SR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_atmos_opacity': 0.0,
        'sr_cloud_qa': 0.0
    },
    'LANDSAT/LT04/C01/T1_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C01/T2_SR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_atmos_opacity': 0.0,
        'sr_cloud_qa': 0.0
    },
    'LANDSAT/LT04/C01/T2_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT04/C02/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT04/C02/T1_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_ATMOS_OPACITY': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B7': -0.2,
        'SR_CLOUD_QA': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B6': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LT04/C02/T1_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT04/C02/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT04/C02/T2_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_ATMOS_OPACITY': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B7': -0.2,
        'SR_CLOUD_QA': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B6': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LT04/C02/T2_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT05/C01/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T1_32DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T1_8DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_GREENEST_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0,
        'greenness': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T1_ANNUAL_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T1_SR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_atmos_opacity': 0.0,
        'sr_cloud_qa': 0.0
    },
    'LANDSAT/LT05/C01/T1_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C01/T2_SR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'pixel_qa': 0.0,
        'radsat_qa': 0.0,
        'sr_atmos_opacity': 0.0,
        'sr_cloud_qa': 0.0
    },
    'LANDSAT/LT05/C01/T2_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT05/C02/T1': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT05/C02/T1_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_ATMOS_OPACITY': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B7': -0.2,
        'SR_CLOUD_QA': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B6': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LT05/C02/T1_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT05/C02/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT05/C02/T2_L2': {
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SR_ATMOS_OPACITY': 0.0,
        'SR_B1': -0.2,
        'SR_B2': -0.2,
        'SR_B3': -0.2,
        'SR_B4': -0.2,
        'SR_B5': -0.2,
        'SR_B7': -0.2,
        'SR_CLOUD_QA': 0.0,
        'ST_ATRAN': 0.0,
        'ST_B6': 149,
        'ST_CDIST': 0.0,
        'ST_DRAD': 0.0,
        'ST_EMIS': 0.0,
        'ST_EMSD': 0.0,
        'ST_QA': 0.0,
        'ST_TRAD': 0.0,
        'ST_URAD': 0.0
    },
    'LANDSAT/LT05/C02/T2_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'QA_PIXEL': 0.0,
        'QA_RADSAT': 0.0,
        'SAA': 0.0,
        'SZA': 0.0,
        'VAA': 0.0,
        'VZA': 0.0
    },
    'LANDSAT/LT08/C01/T2': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT4': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT4_L1T': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT4_L1T_32DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT4_L1T_8DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_GREENEST_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'greenness': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT4_L1T_ANNUAL_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LT4_L1T_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LT5': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT5_L1T': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT5_L1T_32DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT5_L1T_8DAY_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_BAI': {
        'BAI': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_EVI': {
        'EVI': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_GREENEST_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'greenness': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_NBRT': {
        'NBRT': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_NDSI': {
        'NDSI': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_NDVI': {
        'NDVI': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_NDWI': {
        'NDWI': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_RAW': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'BQA': 0.0
    },
    'LANDSAT/LT5_L1T_ANNUAL_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/LT5_L1T_TOA': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0
    },
    'LANDSAT/MANGROVE_FORESTS': {
        '1': 0.0
    },
    'LARSE/GEDI/GEDI02_A_002_MONTHLY': {
        'beam': 0.0,
        'degrade_flag': 0.0,
        'delta_time': 0.0,
        'digital_elevation_model': 0.0,
        'digital_elevation_model_srtm': 0.0,
        'elev_highestreturn': 0.0,
        'elev_lowestmode': 0.0,
        'elevation_bias_flag': 0.0,
        'energy_total': 0.0,
        'landsat_treecover': 0.0,
        'landsat_water_persistence': 0.0,
        'lat_highestreturn': 0.0,
        'leaf_off_doy': 0.0,
        'leaf_off_flag': 0.0,
        'leaf_on_cycle': 0.0,
        'leaf_on_doy': 0.0,
        'local_beam_azimuth': 0.0,
        'local_beam_elevation': 0.0,
        'lon_highestreturn': 0.0,
        'minor_frame_number': 0.0,
        'modis_nonvegetated': 0.0,
        'modis_nonvegetated_sd': 0.0,
        'modis_treecover': 0.0,
        'modis_treecover_sd': 0.0,
        'num_detectedmodes': 0.0,
        'orbit_number': 0.0,
        'pft_class': 0.0,
        'quality_flag': 0.0,
        'region_class': 0.0,
        'rh0': 0.0,
        'rh1': 0.0,
        'rh10': 0.0,
        'rh100': 0.0,
        'rh11': 0.0,
        'rh12': 0.0,
        'rh13': 0.0,
        'rh14': 0.0,
        'rh15': 0.0,
        'rh16': 0.0,
        'rh17': 0.0,
        'rh18': 0.0,
        'rh19': 0.0,
        'rh2': 0.0,
        'rh20': 0.0,
        'rh21': 0.0,
        'rh22': 0.0,
        'rh23': 0.0,
        'rh24': 0.0,
        'rh25': 0.0,
        'rh26': 0.0,
        'rh27': 0.0,
        'rh28': 0.0,
        'rh29': 0.0,
        'rh3': 0.0,
        'rh30': 0.0,
        'rh31': 0.0,
        'rh32': 0.0,
        'rh33': 0.0,
        'rh34': 0.0,
        'rh35': 0.0,
        'rh36': 0.0,
        'rh37': 0.0,
        'rh38': 0.0,
        'rh39': 0.0,
        'rh4': 0.0,
        'rh40': 0.0,
        'rh41': 0.0,
        'rh42': 0.0,
        'rh43': 0.0,
        'rh44': 0.0,
        'rh45': 0.0,
        'rh46': 0.0,
        'rh47': 0.0,
        'rh48': 0.0,
        'rh49': 0.0,
        'rh5': 0.0,
        'rh50': 0.0,
        'rh51': 0.0,
        'rh52': 0.0,
        'rh53': 0.0,
        'rh54': 0.0,
        'rh55': 0.0,
        'rh56': 0.0,
        'rh57': 0.0,
        'rh58': 0.0,
        'rh59': 0.0,
        'rh6': 0.0,
        'rh60': 0.0,
        'rh61': 0.0,
        'rh62': 0.0,
        'rh63': 0.0,
        'rh64': 0.0,
        'rh65': 0.0,
        'rh66': 0.0,
        'rh67': 0.0,
        'rh68': 0.0,
        'rh69': 0.0,
        'rh7': 0.0,
        'rh70': 0.0,
        'rh71': 0.0,
        'rh72': 0.0,
        'rh73': 0.0,
        'rh74': 0.0,
        'rh75': 0.0,
        'rh76': 0.0,
        'rh77': 0.0,
        'rh78': 0.0,
        'rh79': 0.0,
        'rh8': 0.0,
        'rh80': 0.0,
        'rh81': 0.0,
        'rh82': 0.0,
        'rh83': 0.0,
        'rh84': 0.0,
        'rh85': 0.0,
        'rh86': 0.0,
        'rh87': 0.0,
        'rh88': 0.0,
        'rh89': 0.0,
        'rh9': 0.0,
        'rh90': 0.0,
        'rh91': 0.0,
        'rh92': 0.0,
        'rh93': 0.0,
        'rh94': 0.0,
        'rh95': 0.0,
        'rh96': 0.0,
        'rh97': 0.0,
        'rh98': 0.0,
        'rh99': 0.0,
        'selected_algorithm': 0.0,
        'selected_mode': 0.0,
        'selected_mode_flag': 0.0,
        'sensitivity': 0.0,
        'shot_number_within_beam': 0.0,
        'solar_azimuth': 0.0,
        'solar_elevation': 0.0,
        'surface_flag': 0.0,
        'urban_focal_window_size': 0.0,
        'urban_proportion': 0.0
    },
    'LARSE/GEDI/GEDI02_B_002_MONTHLY': {
        'algorithmrun_flag': 0.0,
        'beam': 0.0,
        'cover': 0.0,
        'cover_z0': 0.0,
        'cover_z1': 0.0,
        'cover_z10': 0.0,
        'cover_z11': 0.0,
        'cover_z12': 0.0,
        'cover_z13': 0.0,
        'cover_z14': 0.0,
        'cover_z15': 0.0,
        'cover_z16': 0.0,
        'cover_z17': 0.0,
        'cover_z18': 0.0,
        'cover_z19': 0.0,
        'cover_z2': 0.0,
        'cover_z20': 0.0,
        'cover_z21': 0.0,
        'cover_z22': 0.0,
        'cover_z23': 0.0,
        'cover_z24': 0.0,
        'cover_z25': 0.0,
        'cover_z26': 0.0,
        'cover_z27': 0.0,
        'cover_z28': 0.0,
        'cover_z29': 0.0,
        'cover_z3': 0.0,
        'cover_z30': 0.0,
        'cover_z4': 0.0,
        'cover_z5': 0.0,
        'cover_z6': 0.0,
        'cover_z7': 0.0,
        'cover_z8': 0.0,
        'cover_z9': 0.0,
        'degrade_flag': 0.0,
        'delta_time': 0.0,
        'fhd_normal': 0.0,
        'l2b_quality_flag': 0.0,
        'local_beam_azimuth': 0.0,
        'local_beam_elevation': 0.0,
        'pai': 0.0,
        'pai_z0': 0.0,
        'pai_z1': 0.0,
        'pai_z10': 0.0,
        'pai_z11': 0.0,
        'pai_z12': 0.0,
        'pai_z13': 0.0,
        'pai_z14': 0.0,
        'pai_z15': 0.0,
        'pai_z16': 0.0,
        'pai_z17': 0.0,
        'pai_z18': 0.0,
        'pai_z19': 0.0,
        'pai_z2': 0.0,
        'pai_z20': 0.0,
        'pai_z21': 0.0,
        'pai_z22': 0.0,
        'pai_z23': 0.0,
        'pai_z24': 0.0,
        'pai_z25': 0.0,
        'pai_z26': 0.0,
        'pai_z27': 0.0,
        'pai_z28': 0.0,
        'pai_z29': 0.0,
        'pai_z3': 0.0,
        'pai_z30': 0.0,
        'pai_z4': 0.0,
        'pai_z5': 0.0,
        'pai_z6': 0.0,
        'pai_z7': 0.0,
        'pai_z8': 0.0,
        'pai_z9': 0.0,
        'pavd_z0': 0.0,
        'pavd_z1': 0.0,
        'pavd_z10': 0.0,
        'pavd_z11': 0.0,
        'pavd_z12': 0.0,
        'pavd_z13': 0.0,
        'pavd_z14': 0.0,
        'pavd_z15': 0.0,
        'pavd_z16': 0.0,
        'pavd_z17': 0.0,
        'pavd_z18': 0.0,
        'pavd_z19': 0.0,
        'pavd_z2': 0.0,
        'pavd_z20': 0.0,
        'pavd_z21': 0.0,
        'pavd_z22': 0.0,
        'pavd_z23': 0.0,
        'pavd_z24': 0.0,
        'pavd_z25': 0.0,
        'pavd_z26': 0.0,
        'pavd_z27': 0.0,
        'pavd_z28': 0.0,
        'pavd_z29': 0.0,
        'pavd_z3': 0.0,
        'pavd_z30': 0.0,
        'pavd_z4': 0.0,
        'pavd_z5': 0.0,
        'pavd_z6': 0.0,
        'pavd_z7': 0.0,
        'pavd_z8': 0.0,
        'pavd_z9': 0.0,
        'pgap_theta': 0.0,
        'selected_l2a_algorithm': 0.0,
        'selected_rg_algorithm': 0.0,
        'sensitivity': 0.0,
        'shot_number': 0.0,
        'shot_number_within_beam': 0.0,
        'solar_azimuth': 0.0,
        'solar_elevation': 0.0
    },
    'LARSE/GEDI/GEDI04_A_002_MONTHLY': {
        'agbd': 0.0,
        'agbd_aN': 0.0,
        'agbd_pi_lower': 0.0,
        'agbd_pi_lower_aN': 0.0,
        'agbd_pi_upper': 0.0,
        'agbd_pi_upper_aN': 0.0,
        'agbd_se': 0.0,
        'agbd_se_aN': 0.0,
        'agbd_t': 0.0,
        'agbd_t_aN': 0.0,
        'agbd_t_pi_lower_aN': 0.0,
        'agbd_t_pi_upper_aN': 0.0,
        'agbd_t_se': 0.0,
        'agbd_t_se_aN': 0.0,
        'algorithm_run_flag': 0.0,
        'algorithm_run_flag_aN': 0.0,
        'beam': 0.0,
        'channel': 0.0,
        'degrade_flag': 0.0,
        'delta_time': 0.0,
        'elev_lowestmode': 0.0,
        'elev_lowestmode_aN': 0.0,
        'l2_quality_flag': 0.0,
        'l2_quality_flag_aN': 0.0,
        'l4_quality_flag': 0.0,
        'l4_quality_flag_aN': 0.0,
        'landsat_treecover': 0.0,
        'landsat_water_persistence': 0.0,
        'lat_lowestmode': 0.0,
        'lat_lowestmode_aN': 0.0,
        'leaf_off_doy': 0.0,
        'leaf_off_flag': 0.0,
        'leaf_on_cycle': 0.0,
        'leaf_on_doy': 0.0,
        'lon_lowestmode': 0.0,
        'lon_lowestmode_aN': 0.0,
        'master_frac': 0.0,
        'master_int': 0.0,
        'pft_class': 0.0,
        'predict_stratum': 0.0,
        'predictor_limit_flag': 0.0,
        'predictor_limit_flag_aN': 0.0,
        'region_class': 0.0,
        'response_limit_flag': 0.0,
        'response_limit_flag_aN': 0.0,
        'selected_algorithm': 0.0,
        'selected_mode': 0.0,
        'selected_mode_aN': 0.0,
        'selected_mode_flag': 0.0,
        'selected_mode_flag_aN': 0.0,
        'sensitivity': 0.0,
        'sensitivity_aN': 0.0,
        'shot_number': 0.0,
        'shot_number_within_beam': 0.0,
        'solar_elevation': 0.0,
        'stale_return_flag': 0.0,
        'surface_flag': 0.0,
        'urban_focal_window_size': 0.0,
        'urban_proportion': 0.0
    },
    'LARSE/GEDI/GEDI04_B_002': {
        'MI': 0.0,
        'MU': 0.0,
        'NC': 0.0,
        'NS': 0.0,
        'PE': 0.0,
        'PS': 0.0,
        'QF': 0.0,
        'SE': 0.0,
        'V1': 0.0,
        'V2': 0.0
    },
    'MERIT/DEM/v1_0_3': {
        'dem': 0.0
    },
    'MERIT/Hydro/v1_0_1': {
        'dir': 0.0,
        'elv': 0.0,
        'hnd': 0.0,
        'upa': 0.0,
        'upg': 0.0,
        'viswth': 0.0,
        'wat': 0.0,
        'wth': 0.0
    },
    'MERIT/Hydro_reduced/v1_0_1': {
        'upa': 0.0,
        'wth': 0.0
    },
    'MODIS/006/MCD12Q1': {
        'LC_Prop1': 0.0,
        'LC_Prop1_Assessment': 0.0,
        'LC_Prop2': 0.0,
        'LC_Prop2_Assessment': 0.0,
        'LC_Prop3': 0.0,
        'LC_Prop3_Assessment': 0.0,
        'LC_Type1': 0.0,
        'LC_Type2': 0.0,
        'LC_Type3': 0.0,
        'LC_Type4': 0.0,
        'LC_Type5': 0.0,
        'LW': 0.0,
        'QC': 0.0
    },
    'MODIS/006/MCD12Q2': {
        'Dormancy_1': 0.0,
        'Dormancy_2': 0.0,
        'EVI_Amplitude_1': 0.0,
        'EVI_Amplitude_2': 0.0,
        'EVI_Area_1': 0.0,
        'EVI_Area_2': 0.0,
        'EVI_Minimum_1': 0.0,
        'EVI_Minimum_2': 0.0,
        'Greenup_1': 0.0,
        'Greenup_2': 0.0,
        'Maturity_1': 0.0,
        'Maturity_2': 0.0,
        'MidGreendown_1': 0.0,
        'MidGreendown_2': 0.0,
        'MidGreenup_1': 0.0,
        'MidGreenup_2': 0.0,
        'NumCycles': 0.0,
        'Peak_1': 0.0,
        'Peak_2': 0.0,
        'QA_Detailed_1': 0.0,
        'QA_Detailed_2': 0.0,
        'QA_Overall_1': 0.0,
        'QA_Overall_2': 0.0,
        'Senescence_1': 0.0,
        'Senescence_2': 0.0
    },
    'MODIS/006/MCD15A3H': {
        'Fpar': 0.0,
        'FparExtra_QC': 0.0,
        'FparLai_QC': 0.0,
        'FparStdDev': 0.0,
        'Lai': 0.0,
        'LaiStdDev': 0.0
    },
    'MODIS/006/MCD19A2_GRANULES': {
        'AOD_MODEL': 0.0,
        'AOD_QA': 0.0,
        'AOD_Uncertainty': 0.0,
        'Column_WV': 0.0,
        'FineModeFraction': 0.0,
        'Glint_Angle': 0.0,
        'Injection_Height': 0.0,
        'Optical_Depth_047': 0.0,
        'Optical_Depth_055': 0.0,
        'RelAZ': 0.0,
        'Scattering_Angle': 0.0,
        'cosSZA': 0.0,
        'cosVZA': 0.0
    },
    'MODIS/006/MCD43A1': {
        'BRDF_Albedo_Band_Mandatory_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band7': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_nir': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_shortwave': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_vis': 0.0,
        'BRDF_Albedo_Parameters_Band1_geo': 0.0,
        'BRDF_Albedo_Parameters_Band1_iso': 0.0,
        'BRDF_Albedo_Parameters_Band1_vol': 0.0,
        'BRDF_Albedo_Parameters_Band2_geo': 0.0,
        'BRDF_Albedo_Parameters_Band2_iso': 0.0,
        'BRDF_Albedo_Parameters_Band2_vol': 0.0,
        'BRDF_Albedo_Parameters_Band3_geo': 0.0,
        'BRDF_Albedo_Parameters_Band3_iso': 0.0,
        'BRDF_Albedo_Parameters_Band3_vol': 0.0,
        'BRDF_Albedo_Parameters_Band4_geo': 0.0,
        'BRDF_Albedo_Parameters_Band4_iso': 0.0,
        'BRDF_Albedo_Parameters_Band4_vol': 0.0,
        'BRDF_Albedo_Parameters_Band5_geo': 0.0,
        'BRDF_Albedo_Parameters_Band5_iso': 0.0,
        'BRDF_Albedo_Parameters_Band5_vol': 0.0,
        'BRDF_Albedo_Parameters_Band6_geo': 0.0,
        'BRDF_Albedo_Parameters_Band6_iso': 0.0,
        'BRDF_Albedo_Parameters_Band6_vol': 0.0,
        'BRDF_Albedo_Parameters_Band7_geo': 0.0,
        'BRDF_Albedo_Parameters_Band7_iso': 0.0,
        'BRDF_Albedo_Parameters_Band7_vol': 0.0,
        'BRDF_Albedo_Parameters_nir_geo': 0.0,
        'BRDF_Albedo_Parameters_nir_iso': 0.0,
        'BRDF_Albedo_Parameters_nir_vol': 0.0,
        'BRDF_Albedo_Parameters_shortwave_geo': 0.0,
        'BRDF_Albedo_Parameters_shortwave_iso': 0.0,
        'BRDF_Albedo_Parameters_shortwave_vol': 0.0,
        'BRDF_Albedo_Parameters_vis_geo': 0.0,
        'BRDF_Albedo_Parameters_vis_iso': 0.0,
        'BRDF_Albedo_Parameters_vis_vol': 0.0
    },
    'MODIS/006/MCD43A2': {
        'BRDF_Albedo_Band_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Quality_Band7': 0.0,
        'BRDF_Albedo_LandWaterType': 0.0,
        'BRDF_Albedo_LocalSolarNoon': 0.0,
        'BRDF_Albedo_Platform': 0.0,
        'BRDF_Albedo_Uncertainty': 0.0,
        'BRDF_Albedo_ValidObs_Band1': 0.0,
        'BRDF_Albedo_ValidObs_Band2': 0.0,
        'BRDF_Albedo_ValidObs_Band3': 0.0,
        'BRDF_Albedo_ValidObs_Band4': 0.0,
        'BRDF_Albedo_ValidObs_Band5': 0.0,
        'BRDF_Albedo_ValidObs_Band6': 0.0,
        'BRDF_Albedo_ValidObs_Band7': 0.0,
        'Snow_BRDF_Albedo': 0.0
    },
    'MODIS/006/MCD43A3': {
        'Albedo_BSA_Band1': 0.0,
        'Albedo_BSA_Band2': 0.0,
        'Albedo_BSA_Band3': 0.0,
        'Albedo_BSA_Band4': 0.0,
        'Albedo_BSA_Band5': 0.0,
        'Albedo_BSA_Band6': 0.0,
        'Albedo_BSA_Band7': 0.0,
        'Albedo_BSA_nir': 0.0,
        'Albedo_BSA_shortwave': 0.0,
        'Albedo_BSA_vis': 0.0,
        'Albedo_WSA_Band1': 0.0,
        'Albedo_WSA_Band2': 0.0,
        'Albedo_WSA_Band3': 0.0,
        'Albedo_WSA_Band4': 0.0,
        'Albedo_WSA_Band5': 0.0,
        'Albedo_WSA_Band6': 0.0,
        'Albedo_WSA_Band7': 0.0,
        'Albedo_WSA_nir': 0.0,
        'Albedo_WSA_shortwave': 0.0,
        'Albedo_WSA_vis': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band7': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_nir': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_shortwave': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_vis': 0.0
    },
    'MODIS/006/MCD43A4': {
        'BRDF_Albedo_Band_Mandatory_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band7': 0.0,
        'Nadir_Reflectance_Band1': 0.0,
        'Nadir_Reflectance_Band2': 0.0,
        'Nadir_Reflectance_Band3': 0.0,
        'Nadir_Reflectance_Band4': 0.0,
        'Nadir_Reflectance_Band5': 0.0,
        'Nadir_Reflectance_Band6': 0.0,
        'Nadir_Reflectance_Band7': 0.0
    },
    'MODIS/006/MCD43C3': {
        'Albedo_BSA_Band1': 0.0,
        'Albedo_BSA_Band2': 0.0,
        'Albedo_BSA_Band3': 0.0,
        'Albedo_BSA_Band4': 0.0,
        'Albedo_BSA_Band5': 0.0,
        'Albedo_BSA_Band6': 0.0,
        'Albedo_BSA_Band7': 0.0,
        'Albedo_BSA_nir': 0.0,
        'Albedo_BSA_shortwave': 0.0,
        'Albedo_BSA_vis': 0.0,
        'Albedo_WSA_Band1': 0.0,
        'Albedo_WSA_Band2': 0.0,
        'Albedo_WSA_Band3': 0.0,
        'Albedo_WSA_Band4': 0.0,
        'Albedo_WSA_Band5': 0.0,
        'Albedo_WSA_Band6': 0.0,
        'Albedo_WSA_Band7': 0.0,
        'Albedo_WSA_nir': 0.0,
        'Albedo_WSA_shortwave': 0.0,
        'Albedo_WSA_vis': 0.0,
        'BRDF_Albedo_Uncertainty': 0.0,
        'BRDF_Quality': 0.0,
        'Local_Solar_Noon': 0.0,
        'Percent_Inputs': 0.0,
        'Percent_Snow': 0.0
    },
    'MODIS/006/MCD64A1': {
        'BurnDate': 0.0,
        'FirstDay': 0.0,
        'LastDay': 0.0,
        'QA': 0.0,
        'Uncertainty': 0.0
    },
    'MODIS/006/MOD08_M3': {
        'Aerosol_Optical_Depth_Land_Ocean_Mean_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Mean_Mean_470': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470': 0.0,
        'Cirrus_Fraction_SWIR_FMean': 0.0,
        'Cirrus_Fraction_SWIR_FStd': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Mean_Uncertainty': 0.0
    },
    'MODIS/006/MOD09A1': {
        'DayOfYear': 0.0,
        'QA': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'StateQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MOD09GA': {
        'QC_500m': 0.0,
        'Range': 0.0,
        'SensorAzimuth': 0.0,
        'SensorZenith': 0.0,
        'SolarAzimuth': 0.0,
        'SolarZenith': 0.0,
        'gflags': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations_1km': 0.0,
        'num_observations_500m': 0.0,
        'obscov_500m': 0.0,
        'orbit_pnt': 0.0,
        'q_scan': 0.0,
        'state_1km': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MOD09GQ': {
        'QC_250m': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations': 0.0,
        'obscov': 0.0,
        'orbit_pnt': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/006/MOD09Q1': {
        'QA': 0.0,
        'State': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/006/MOD10A1': {
        'NDSI': 0.0,
        'NDSI_Snow_Cover': 0.0,
        'NDSI_Snow_Cover_Algorithm_Flags_QA': 0.0,
        'NDSI_Snow_Cover_Basic_QA': 0.0,
        'NDSI_Snow_Cover_Class': 0.0,
        'Snow_Albedo_Daily_Tile': 0.0,
        'Snow_Albedo_Daily_Tile_Class': 0.0,
        'granule_pnt': 0.0,
        'orbit_pnt': 0.0
    },
    'MODIS/006/MOD11A1': {
        'Clear_day_cov': 0.0,
        'Clear_night_cov': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/006/MOD11A2': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Day_view_angl': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angl': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/006/MOD13A1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MOD13A2': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MOD13Q1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MOD14A1': {
        'FireMask': 0.0,
        'MaxFRP': 0.0,
        'QA': 0.0,
        'sample': 0.0
    },
    'MODIS/006/MOD14A2': {
        'FireMask': 0.0,
        'QA': 0.0
    },
    'MODIS/006/MOD15A2H': {
        'FparExtra_QC': 0.0,
        'FparLai_QC': 0.0,
        'FparStdDev_500m': 0.0,
        'Fpar_500m': 0.0,
        'LaiStdDev_500m': 0.0,
        'Lai_500m': 0.0
    },
    'MODIS/006/MOD16A2': {
        'ET': 0.0,
        'ET_QC': 0.0,
        'LE': 0.0,
        'PET': 0.0,
        'PLE': 0.0
    },
    'MODIS/006/MOD17A2H': {
        'Gpp': 0.0,
        'PsnNet': 0.0,
        'Psn_QC': 0.0
    },
    'MODIS/006/MOD17A3H': {
        'Npp': 0.0,
        'Npp_QC': 0.0
    },
    'MODIS/006/MOD17A3HGF': {
        'Npp': 0.0,
        'Npp_QC': 0.0
    },
    'MODIS/006/MOD44B': {
        'Cloud': 0.0,
        'Percent_NonTree_Vegetation': 0.0,
        'Percent_NonVegetated': 0.0,
        'Percent_NonVegetated_SD': 0.0,
        'Percent_Tree_Cover': 0.0,
        'Percent_Tree_Cover_SD': 0.0,
        'Quality': 0.0
    },
    'MODIS/006/MOD44W': {
        'water_mask': 0.0,
        'water_mask_QA': 0.0
    },
    'MODIS/006/MODOCGA': {
        'QC_b16_15_1km': 0.0,
        'QC_b8_15_1km': 0.0,
        'granule_pnt': 0.0,
        'num_observations': 0.0,
        'orbit_pnt': 0.0,
        'sur_refl_b08': 0.0,
        'sur_refl_b09': 0.0,
        'sur_refl_b10': 0.0,
        'sur_refl_b11': 0.0,
        'sur_refl_b12': 0.0,
        'sur_refl_b13': 0.0,
        'sur_refl_b14': 0.0,
        'sur_refl_b15': 0.0,
        'sur_refl_b16': 0.0
    },
    'MODIS/006/MYD08_M3': {
        'Aerosol_Optical_Depth_Land_Ocean_Mean_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Mean_Mean_470': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470': 0.0,
        'Cirrus_Fraction_SWIR_FMean': 0.0,
        'Cirrus_Fraction_SWIR_FStd': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Mean_Uncertainty': 0.0
    },
    'MODIS/006/MYD09A1': {
        'DayOfYear': 0.0,
        'QA': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'StateQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MYD09GA': {
        'QC_500m': 0.0,
        'Range': 0.0,
        'SensorAzimuth': 0.0,
        'SensorZenith': 0.0,
        'SolarAzimuth': 0.0,
        'SolarZenith': 0.0,
        'gflags': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations_1km': 0.0,
        'num_observations_500m': 0.0,
        'obscov_500m': 0.0,
        'orbit_pnt': 0.0,
        'q_scan': 0.0,
        'state_1km': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MYD09GQ': {
        'QC_250m': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations': 0.0,
        'obscov': 0.0,
        'orbit_pnt': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/006/MYD09Q1': {
        'QA': 0.0,
        'State': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/006/MYD10A1': {
        'NDSI': 0.0,
        'NDSI_Snow_Cover': 0.0,
        'NDSI_Snow_Cover_Algorithm_Flags_QA': 0.0,
        'NDSI_Snow_Cover_Basic_QA': 0.0,
        'NDSI_Snow_Cover_Class': 0.0,
        'Snow_Albedo_Daily_Tile': 0.0,
        'Snow_Albedo_Daily_Tile_Class': 0.0,
        'granule_pnt': 0.0,
        'orbit_pnt': 0.0
    },
    'MODIS/006/MYD11A1': {
        'Clear_day_cov': 0.0,
        'Clear_night_cov': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/006/MYD11A2': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Day_view_angl': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angl': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/006/MYD13A1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MYD13A2': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MYD13Q1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/006/MYD14A1': {
        'FireMask': 0.0,
        'MaxFRP': 0.0,
        'QA': 0.0,
        'sample': 0.0
    },
    'MODIS/006/MYD14A2': {
        'FireMask': 0.0,
        'QA': 0.0
    },
    'MODIS/006/MYD15A2H': {
        'FparExtra_QC': 0.0,
        'FparLai_QC': 0.0,
        'FparStdDev_500m': 0.0,
        'Fpar_500m': 0.0,
        'LaiStdDev_500m': 0.0,
        'Lai_500m': 0.0
    },
    'MODIS/006/MYD17A2H': {
        'Gpp': 0.0,
        'PsnNet': 0.0,
        'Psn_QC': 0.0
    },
    'MODIS/006/MYD17A3H': {
        'Npp': 0.0,
        'Npp_QC': 0.0
    },
    'MODIS/006/MYD17A3HGF': {
        'Npp': 0.0,
        'Npp_QC': 0.0
    },
    'MODIS/006/MYDOCGA': {
        'QC_b16_15_1km': 0.0,
        'QC_b8_15_1km': 0.0,
        'granule_pnt': 0.0,
        'num_observations': 0.0,
        'orbit_pnt': 0.0,
        'sur_refl_b08': 0.0,
        'sur_refl_b09': 0.0,
        'sur_refl_b10': 0.0,
        'sur_refl_b11': 0.0,
        'sur_refl_b12': 0.0,
        'sur_refl_b13': 0.0,
        'sur_refl_b14': 0.0,
        'sur_refl_b15': 0.0,
        'sur_refl_b16': 0.0
    },
    'MODIS/055/MOD17A3': {
        'Gpp': 0.0,
        'Gpp_Npp_QC': 0.0,
        'Npp': 0.0
    },
    'MODIS/061/MCD12Q1': {
        'LC_Prop1': 0.0,
        'LC_Prop1_Assessment': 0.0,
        'LC_Prop2': 0.0,
        'LC_Prop2_Assessment': 0.0,
        'LC_Prop3': 0.0,
        'LC_Prop3_Assessment': 0.0,
        'LC_Type1': 0.0,
        'LC_Type2': 0.0,
        'LC_Type3': 0.0,
        'LC_Type4': 0.0,
        'LC_Type5': 0.0,
        'LW': 0.0,
        'QC': 0.0
    },
    'MODIS/061/MCD12Q2': {
        'Dormancy_1': 0.0,
        'Dormancy_2': 0.0,
        'EVI_Amplitude_1': 0.0,
        'EVI_Amplitude_2': 0.0,
        'EVI_Area_1': 0.0,
        'EVI_Area_2': 0.0,
        'EVI_Minimum_1': 0.0,
        'EVI_Minimum_2': 0.0,
        'Greenup_1': 0.0,
        'Greenup_2': 0.0,
        'Maturity_1': 0.0,
        'Maturity_2': 0.0,
        'MidGreendown_1': 0.0,
        'MidGreendown_2': 0.0,
        'MidGreenup_1': 0.0,
        'MidGreenup_2': 0.0,
        'NumCycles': 0.0,
        'Peak_1': 0.0,
        'Peak_2': 0.0,
        'QA_Detailed_1': 0.0,
        'QA_Detailed_2': 0.0,
        'QA_Overall_1': 0.0,
        'QA_Overall_2': 0.0,
        'Senescence_1': 0.0,
        'Senescence_2': 0.0
    },
    'MODIS/061/MCD15A3H': {
        'Fpar': 0.0,
        'FparExtra_QC': 0.0,
        'FparLai_QC': 0.0,
        'FparStdDev': 0.0,
        'Lai': 0.0,
        'LaiStdDev': 0.0
    },
    'MODIS/061/MCD18C2': {
        'GMT_0000_PAR': 0.0,
        'GMT_0300_PAR': 0.0,
        'GMT_0600_PAR': 0.0,
        'GMT_0900_PAR': 0.0,
        'GMT_1200_PAR': 0.0,
        'GMT_1500_PAR': 0.0,
        'GMT_1800_PAR': 0.0,
        'GMT_2100_PAR': 0.0
    },
    'MODIS/061/MCD43A1': {
        'BRDF_Albedo_Band_Mandatory_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band7': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_nir': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_shortwave': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_vis': 0.0,
        'BRDF_Albedo_Parameters_Band1_geo': 0.0,
        'BRDF_Albedo_Parameters_Band1_iso': 0.0,
        'BRDF_Albedo_Parameters_Band1_vol': 0.0,
        'BRDF_Albedo_Parameters_Band2_geo': 0.0,
        'BRDF_Albedo_Parameters_Band2_iso': 0.0,
        'BRDF_Albedo_Parameters_Band2_vol': 0.0,
        'BRDF_Albedo_Parameters_Band3_geo': 0.0,
        'BRDF_Albedo_Parameters_Band3_iso': 0.0,
        'BRDF_Albedo_Parameters_Band3_vol': 0.0,
        'BRDF_Albedo_Parameters_Band4_geo': 0.0,
        'BRDF_Albedo_Parameters_Band4_iso': 0.0,
        'BRDF_Albedo_Parameters_Band4_vol': 0.0,
        'BRDF_Albedo_Parameters_Band5_geo': 0.0,
        'BRDF_Albedo_Parameters_Band5_iso': 0.0,
        'BRDF_Albedo_Parameters_Band5_vol': 0.0,
        'BRDF_Albedo_Parameters_Band6_geo': 0.0,
        'BRDF_Albedo_Parameters_Band6_iso': 0.0,
        'BRDF_Albedo_Parameters_Band6_vol': 0.0,
        'BRDF_Albedo_Parameters_Band7_geo': 0.0,
        'BRDF_Albedo_Parameters_Band7_iso': 0.0,
        'BRDF_Albedo_Parameters_Band7_vol': 0.0,
        'BRDF_Albedo_Parameters_nir_geo': 0.0,
        'BRDF_Albedo_Parameters_nir_iso': 0.0,
        'BRDF_Albedo_Parameters_nir_vol': 0.0,
        'BRDF_Albedo_Parameters_shortwave_geo': 0.0,
        'BRDF_Albedo_Parameters_shortwave_iso': 0.0,
        'BRDF_Albedo_Parameters_shortwave_vol': 0.0,
        'BRDF_Albedo_Parameters_vis_geo': 0.0,
        'BRDF_Albedo_Parameters_vis_iso': 0.0,
        'BRDF_Albedo_Parameters_vis_vol': 0.0
    },
    'MODIS/061/MCD43A2': {
        'BRDF_Albedo_Band_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Quality_Band7': 0.0,
        'BRDF_Albedo_LandWaterType': 0.0,
        'BRDF_Albedo_LocalSolarNoon': 0.0,
        'BRDF_Albedo_Platform': 0.0,
        'BRDF_Albedo_Uncertainty': 0.0,
        'BRDF_Albedo_ValidObs_Band1': 0.0,
        'BRDF_Albedo_ValidObs_Band2': 0.0,
        'BRDF_Albedo_ValidObs_Band3': 0.0,
        'BRDF_Albedo_ValidObs_Band4': 0.0,
        'BRDF_Albedo_ValidObs_Band5': 0.0,
        'BRDF_Albedo_ValidObs_Band6': 0.0,
        'BRDF_Albedo_ValidObs_Band7': 0.0,
        'Snow_BRDF_Albedo': 0.0
    },
    'MODIS/061/MCD43A3': {
        'Albedo_BSA_Band1': 0.0,
        'Albedo_BSA_Band2': 0.0,
        'Albedo_BSA_Band3': 0.0,
        'Albedo_BSA_Band4': 0.0,
        'Albedo_BSA_Band5': 0.0,
        'Albedo_BSA_Band6': 0.0,
        'Albedo_BSA_Band7': 0.0,
        'Albedo_BSA_nir': 0.0,
        'Albedo_BSA_shortwave': 0.0,
        'Albedo_BSA_vis': 0.0,
        'Albedo_WSA_Band1': 0.0,
        'Albedo_WSA_Band2': 0.0,
        'Albedo_WSA_Band3': 0.0,
        'Albedo_WSA_Band4': 0.0,
        'Albedo_WSA_Band5': 0.0,
        'Albedo_WSA_Band6': 0.0,
        'Albedo_WSA_Band7': 0.0,
        'Albedo_WSA_nir': 0.0,
        'Albedo_WSA_shortwave': 0.0,
        'Albedo_WSA_vis': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band7': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_nir': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_shortwave': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_vis': 0.0
    },
    'MODIS/061/MCD43A4': {
        'BRDF_Albedo_Band_Mandatory_Quality_Band1': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band2': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band3': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band4': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band5': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band6': 0.0,
        'BRDF_Albedo_Band_Mandatory_Quality_Band7': 0.0,
        'Nadir_Reflectance_Band1': 0.0,
        'Nadir_Reflectance_Band2': 0.0,
        'Nadir_Reflectance_Band3': 0.0,
        'Nadir_Reflectance_Band4': 0.0,
        'Nadir_Reflectance_Band5': 0.0,
        'Nadir_Reflectance_Band6': 0.0,
        'Nadir_Reflectance_Band7': 0.0
    },
    'MODIS/061/MCD43C3': {
        'Albedo_BSA_Band1': 0.0,
        'Albedo_BSA_Band2': 0.0,
        'Albedo_BSA_Band3': 0.0,
        'Albedo_BSA_Band4': 0.0,
        'Albedo_BSA_Band5': 0.0,
        'Albedo_BSA_Band6': 0.0,
        'Albedo_BSA_Band7': 0.0,
        'Albedo_BSA_nir': 0.0,
        'Albedo_BSA_shortwave': 0.0,
        'Albedo_BSA_vis': 0.0,
        'Albedo_WSA_Band1': 0.0,
        'Albedo_WSA_Band2': 0.0,
        'Albedo_WSA_Band3': 0.0,
        'Albedo_WSA_Band4': 0.0,
        'Albedo_WSA_Band5': 0.0,
        'Albedo_WSA_Band6': 0.0,
        'Albedo_WSA_Band7': 0.0,
        'Albedo_WSA_nir': 0.0,
        'Albedo_WSA_shortwave': 0.0,
        'Albedo_WSA_vis': 0.0,
        'BRDF_Albedo_Uncertainty': 0.0,
        'BRDF_Quality': 0.0,
        'Local_Solar_Noon': 0.0,
        'Percent_Inputs': 0.0,
        'Percent_Snow': 0.0
    },
    'MODIS/061/MCD64A1': {
        'BurnDate': 0.0,
        'FirstDay': 0.0,
        'LastDay': 0.0,
        'QA': 0.0,
        'Uncertainty': 0.0
    },
    'MODIS/061/MOD08_M3': {
        'Aerosol_Optical_Depth_Land_Ocean_Mean_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Mean_Mean_470': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470': 0.0,
        'Cirrus_Fraction_SWIR_FMean': 0.0,
        'Cirrus_Fraction_SWIR_FStd': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Mean_Uncertainty': 0.0
    },
    'MODIS/061/MOD09A1': {
        'DayOfYear': 0.0,
        'QA': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'StateQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MOD09CMG': {
        'Coarse_Resolution_Band_3_Path_Radiance': 0.0,
        'Coarse_Resolution_Brightness_Temperature_Band_20': 0.0,
        'Coarse_Resolution_Brightness_Temperature_Band_21': 0.0,
        'Coarse_Resolution_Brightness_Temperature_Band_31': 0.0,
        'Coarse_Resolution_Brightness_Temperature_Band_32': 0.0,
        'Coarse_Resolution_Granule_Time': 0.0,
        'Coarse_Resolution_Internal_CM': 0.0,
        'Coarse_Resolution_Number_Mapping': 0.0,
        'Coarse_Resolution_Ozone': 0.0,
        'Coarse_Resolution_QA': 0.0,
        'Coarse_Resolution_Relative_Azimuth_Angle': 0.0,
        'Coarse_Resolution_Solar_Zenith_Angle': 0.0,
        'Coarse_Resolution_State_QA': 0.0,
        'Coarse_Resolution_Surface_Reflectance_Band_1': 0.0,
        'Coarse_Resolution_Surface_Reflectance_Band_2': 0.0,
        'Coarse_Resolution_Surface_Reflectance_Band_3': 0.0,
        'Coarse_Resolution_Surface_Reflectance_Band_4': 0.0,
        'Coarse_Resolution_Surface_Reflectance_Band_5': 0.0,
        'Coarse_Resolution_Surface_Reflectance_Band_6': 0.0,
        'Coarse_Resolution_Surface_Reflectance_Band_7': 0.0,
        'Coarse_Resolution_View_Zenith_Angle': 0.0,
        'n_pixels_averaged': 0.0,
        'number_of_250m_pixels_averaged_b1-2': 0.0,
        'number_of_500m_pixels_averaged_b3': 0.0,
        'number_of_500m_rej_detector': 0.0
    },
    'MODIS/061/MOD09GA': {
        'QC_500m': 0.0,
        'Range': 0.0,
        'SensorAzimuth': 0.0,
        'SensorZenith': 0.0,
        'SolarAzimuth': 0.0,
        'SolarZenith': 0.0,
        'gflags': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations_1km': 0.0,
        'num_observations_500m': 0.0,
        'obscov_500m': 0.0,
        'orbit_pnt': 0.0,
        'q_scan': 0.0,
        'state_1km': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MOD09GQ': {
        'QC_250m': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations': 0.0,
        'obscov': 0.0,
        'orbit_pnt': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/061/MOD09Q1': {
        'QA': 0.0,
        'State': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/061/MOD11A1': {
        'Clear_day_cov': 0.0,
        'Clear_night_cov': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/061/MOD11A2': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Day_view_angl': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angl': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/061/MOD13A1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MOD13A2': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MOD13Q1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MOD14A1': {
        'FireMask': 0.0,
        'MaxFRP': 0.0,
        'QA': 0.0,
        'sample': 0.0
    },
    'MODIS/061/MOD14A2': {
        'FireMask': 0.0,
        'QA': 0.0
    },
    'MODIS/061/MOD15A2H': {
        'FparExtra_QC': 0.0,
        'FparLai_QC': 0.0,
        'FparStdDev_500m': 0.0,
        'Fpar_500m': 0.0,
        'LaiStdDev_500m': 0.0,
        'Lai_500m': 0.0
    },
    'MODIS/061/MOD17A3HGF': {
        'Gpp': 0.0,
        'Npp': 0.0,
        'Npp_QC': 0.0
    },
    'MODIS/061/MOD21A1D': {
        'Emis_29': 0.49,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_1KM': 0.0,
        'QC': 0.0,
        'View_Angle': -65,
        'View_Time': 0.0
    },
    'MODIS/061/MOD21A1N': {
        'Emis_29': 0.49,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_1KM': 0.0,
        'QC': 0.0,
        'View_Angle': -65,
        'View_Time': 0.0
    },
    'MODIS/061/MOD21C1': {
        'Count_Day': 0.0,
        'Count_Night': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_29_Day': 0.49,
        'Emis_29_Day_err': 0.0,
        'Emis_29_Night': 0.49,
        'Emis_29_Night_err': 0.0,
        'Emis_31_Day': 0.49,
        'Emis_31_Day_err': 0.0,
        'Emis_31_Night': 0.49,
        'Emis_31_Night_err': 0.0,
        'Emis_32_Day': 0.49,
        'Emis_32_Day_err': 0.0,
        'Emis_32_Night': 0.49,
        'Emis_32_Night_err': 0.0,
        'LST_Day': 0.0,
        'LST_Day_err': 0.0,
        'LST_Night': 0.0,
        'LST_Night_err': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'Percent_land_in_grid': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0,
        'View_Angle': -65
    },
    'MODIS/061/MOD21C2': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Count_Day': 0.0,
        'Count_Night': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_29_Day': 0.49,
        'Emis_29_Day_err': 0.0,
        'Emis_29_Night': 0.49,
        'Emis_29_Night_err': 0.0,
        'Emis_31_Day': 0.49,
        'Emis_31_Day_err': 0.0,
        'Emis_31_Night': 0.49,
        'Emis_31_Night_err': 0.0,
        'Emis_32_Day': 0.49,
        'Emis_32_Day_err': 0.0,
        'Emis_32_Night': 0.49,
        'Emis_32_Night_err': 0.0,
        'LST_Day': 0.0,
        'LST_Day_err': 0.0,
        'LST_Night': 0.0,
        'LST_Night_err': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'Percent_land_in_grid': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0,
        'View_Angle': -65
    },
    'MODIS/061/MOD21C3': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Count_Day': 0.0,
        'Count_Night': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_29_Day': 0.49,
        'Emis_29_Day_err': 0.0,
        'Emis_29_Night': 0.49,
        'Emis_29_Night_err': 0.0,
        'Emis_31_Day': 0.49,
        'Emis_31_Day_err': 0.0,
        'Emis_31_Night': 0.49,
        'Emis_31_Night_err': 0.0,
        'Emis_32_Day': 0.49,
        'Emis_32_Day_err': 0.0,
        'Emis_32_Night': 0.49,
        'Emis_32_Night_err': 0.0,
        'LST_Day': 0.0,
        'LST_Day_err': 0.0,
        'LST_Night': 0.0,
        'LST_Night_err': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'Percent_land_in_grid': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0,
        'View_Angle': -65
    },
    'MODIS/061/MYD08_M3': {
        'Aerosol_Optical_Depth_Land_Ocean_Mean_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Mean_Mean_470': 0.0,
        'Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470': 0.0,
        'Cirrus_Fraction_SWIR_FMean': 0.0,
        'Cirrus_Fraction_SWIR_FStd': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty': 0.0,
        'Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean': 0.0,
        'Cloud_Optical_Thickness_Liquid_Mean_Uncertainty': 0.0
    },
    'MODIS/061/MYD09A1': {
        'DayOfYear': 0.0,
        'QA': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'StateQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MYD09GA': {
        'QC_500m': 0.0,
        'Range': 0.0,
        'SensorAzimuth': 0.0,
        'SensorZenith': 0.0,
        'SolarAzimuth': 0.0,
        'SolarZenith': 0.0,
        'gflags': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations_1km': 0.0,
        'num_observations_500m': 0.0,
        'obscov_500m': 0.0,
        'orbit_pnt': 0.0,
        'q_scan': 0.0,
        'state_1km': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b04': 0.0,
        'sur_refl_b05': 0.0,
        'sur_refl_b06': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MYD09GQ': {
        'QC_250m': 0.0,
        'granule_pnt': 0.0,
        'iobs_res': 0.0,
        'num_observations': 0.0,
        'obscov': 0.0,
        'orbit_pnt': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/061/MYD09Q1': {
        'QA': 0.0,
        'State': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0
    },
    'MODIS/061/MYD11A1': {
        'Clear_day_cov': 0.0,
        'Clear_night_cov': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/061/MYD11A2': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Day_view_angl': -65,
        'Day_view_time': 0.0,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_Day_1km': 0.0,
        'LST_Night_1km': 0.0,
        'Night_view_angl': -65,
        'Night_view_time': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0
    },
    'MODIS/061/MYD13A1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MYD13A2': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MYD13Q1': {
        'DayOfYear': 0.0,
        'DetailedQA': 0.0,
        'EVI': 0.0,
        'NDVI': 0.0,
        'RelativeAzimuth': 0.0,
        'SolarZenith': 0.0,
        'SummaryQA': 0.0,
        'ViewZenith': 0.0,
        'sur_refl_b01': 0.0,
        'sur_refl_b02': 0.0,
        'sur_refl_b03': 0.0,
        'sur_refl_b07': 0.0
    },
    'MODIS/061/MYD14A1': {
        'FireMask': 0.0,
        'MaxFRP': 0.0,
        'QA': 0.0,
        'sample': 0.0
    },
    'MODIS/061/MYD14A2': {
        'FireMask': 0.0,
        'QA': 0.0
    },
    'MODIS/061/MYD15A2H': {
        'FparExtra_QC': 0.0,
        'FparLai_QC': 0.0,
        'FparStdDev_500m': 0.0,
        'Fpar_500m': 0.0,
        'LaiStdDev_500m': 0.0,
        'Lai_500m': 0.0
    },
    'MODIS/061/MYD17A3HGF': {
        'Gpp': 0.0,
        'Npp': 0.0,
        'Npp_QC': 0.0
    },
    'MODIS/061/MYD21A1D': {
        'Emis_29': 0.49,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_1KM': 0.0,
        'QC': 0.0,
        'View_Angle': -65,
        'View_Time': 0.0
    },
    'MODIS/061/MYD21A1N': {
        'Emis_29': 0.49,
        'Emis_31': 0.49,
        'Emis_32': 0.49,
        'LST_1KM': 0.0,
        'QC': 0.0,
        'View_Angle': -65,
        'View_Time': 0.0
    },
    'MODIS/061/MYD21C1': {
        'Count_Day': 0.0,
        'Count_Night': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_29_Day': 0.49,
        'Emis_29_Day_err': 0.0,
        'Emis_29_Night': 0.49,
        'Emis_29_Night_err': 0.0,
        'Emis_31_Day': 0.49,
        'Emis_31_Day_err': 0.0,
        'Emis_31_Night': 0.49,
        'Emis_31_Night_err': 0.0,
        'Emis_32_Day': 0.49,
        'Emis_32_Day_err': 0.0,
        'Emis_32_Night': 0.49,
        'Emis_32_Night_err': 0.0,
        'LST_Day': 0.0,
        'LST_Day_err': 0.0,
        'LST_Night': 0.0,
        'LST_Night_err': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'Percent_land_in_grid': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0,
        'View_Angle': -65
    },
    'MODIS/061/MYD21C2': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Count_Day': 0.0,
        'Count_Night': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_29_Day': 0.49,
        'Emis_29_Day_err': 0.0,
        'Emis_29_Night': 0.49,
        'Emis_29_Night_err': 0.0,
        'Emis_31_Day': 0.49,
        'Emis_31_Day_err': 0.0,
        'Emis_31_Night': 0.49,
        'Emis_31_Night_err': 0.0,
        'Emis_32_Day': 0.49,
        'Emis_32_Day_err': 0.0,
        'Emis_32_Night': 0.49,
        'Emis_32_Night_err': 0.0,
        'LST_Day': 0.0,
        'LST_Day_err': 0.0,
        'LST_Night': 0.0,
        'LST_Night_err': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'Percent_land_in_grid': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0,
        'View_Angle': -65
    },
    'MODIS/061/MYD21C3': {
        'Clear_sky_days': 0.0,
        'Clear_sky_nights': 0.0,
        'Count_Day': 0.0,
        'Count_Night': 0.0,
        'Day_view_angle': -65,
        'Day_view_time': 0.0,
        'Emis_29_Day': 0.49,
        'Emis_29_Day_err': 0.0,
        'Emis_29_Night': 0.49,
        'Emis_29_Night_err': 0.0,
        'Emis_31_Day': 0.49,
        'Emis_31_Day_err': 0.0,
        'Emis_31_Night': 0.49,
        'Emis_31_Night_err': 0.0,
        'Emis_32_Day': 0.49,
        'Emis_32_Day_err': 0.0,
        'Emis_32_Night': 0.49,
        'Emis_32_Night_err': 0.0,
        'LST_Day': 0.0,
        'LST_Day_err': 0.0,
        'LST_Night': 0.0,
        'LST_Night_err': 0.0,
        'Night_view_angle': -65,
        'Night_view_time': 0.0,
        'Percent_land_in_grid': 0.0,
        'QC_Day': 0.0,
        'QC_Night': 0.0,
        'View_Angle': -65
    },
    'MODIS/MCD43A4_006_BAI': {
        'BAI': 0.0
    },
    'MODIS/MCD43A4_006_EVI': {
        'EVI': 0.0
    },
    'MODIS/MCD43A4_006_NDSI': {
        'NDSI': 0.0
    },
    'MODIS/MCD43A4_006_NDVI': {
        'NDVI': 0.0
    },
    'MODIS/MCD43A4_006_NDWI': {
        'NDWI': 0.0
    },
    'MODIS/MCD43A4_BAI': {
        'BAI': 0.0
    },
    'MODIS/MCD43A4_EVI': {
        'EVI': 0.0
    },
    'MODIS/MCD43A4_NDSI': {
        'NDSI': 0.0
    },
    'MODIS/MCD43A4_NDVI': {
        'NDVI': 0.0
    },
    'MODIS/MCD43A4_NDWI': {
        'NDWI': 0.0
    },
    'MODIS/MOD09GA_006_BAI': {
        'BAI': 0.0
    },
    'MODIS/MOD09GA_006_EVI': {
        'EVI': 0.0
    },
    'MODIS/MOD09GA_006_NDSI': {
        'NDSI': 0.0
    },
    'MODIS/MOD09GA_006_NDVI': {
        'NDVI': 0.0
    },
    'MODIS/MOD09GA_006_NDWI': {
        'NDWI': 0.0
    },
    'MODIS/MOD09GA_BAI': {
        'BAI': 0.0
    },
    'MODIS/MOD09GA_EVI': {
        'EVI': 0.0
    },
    'MODIS/MOD09GA_NDSI': {
        'NDSI': 0.0
    },
    'MODIS/MOD09GA_NDVI': {
        'NDVI': 0.0
    },
    'MODIS/MOD09GA_NDWI': {
        'NDWI': 0.0
    },
    'MODIS/MOD10A1': {
        'Fractional_Snow_Cover': 0.0,
        'Snow_Albedo_Daily_Tile': 0.0,
        'Snow_Cover_Daily_Tile': 0.0,
        'Snow_Spatial_QA': 0.0
    },
    'MODIS/MOD44W/MOD44W_005_2000_02_24': {
        'water_mask': 0.0,
        'water_mask_qa': 0.0
    },
    'MODIS/MYD09GA_006_BAI': {
        'BAI': 0.0
    },
    'MODIS/MYD09GA_006_EVI': {
        'EVI': 0.0
    },
    'MODIS/MYD09GA_006_NDSI': {
        'NDSI': 0.0
    },
    'MODIS/MYD09GA_006_NDVI': {
        'NDVI': 0.0
    },
    'MODIS/MYD09GA_006_NDWI': {
        'NDWI': 0.0
    },
    'MODIS/MYD09GA_BAI': {
        'BAI': 0.0
    },
    'MODIS/MYD09GA_EVI': {
        'EVI': 0.0
    },
    'MODIS/MYD09GA_NDSI': {
        'NDSI': 0.0
    },
    'MODIS/MYD09GA_NDVI': {
        'NDVI': 0.0
    },
    'MODIS/MYD09GA_NDWI': {
        'NDWI': 0.0
    },
    'MODIS/MYD10A1': {
        'Fractional_Snow_Cover': 0.0,
        'Snow_Albedo_Daily_Tile': 0.0,
        'Snow_Cover_Daily_Tile': 0.0,
        'Snow_Spatial_QA': 0.0
    },
    'MODIS/NTSG/MOD16A2/105': {
        'ET': 0.0,
        'ET_QC': 0.0,
        'LE': 0.0,
        'PET': 0.0,
        'PLE': 0.0
    },
    'NASA/ASTER_GED/AG100_003': {
        'elevation': 0.0,
        'emissivity_band10': 0.0,
        'emissivity_band11': 0.0,
        'emissivity_band12': 0.0,
        'emissivity_band13': 0.0,
        'emissivity_band14': 0.0,
        'emissivity_sdev_band10': 0.0,
        'emissivity_sdev_band11': 0.0,
        'emissivity_sdev_band12': 0.0,
        'emissivity_sdev_band13': 0.0,
        'emissivity_sdev_band14': 0.0,
        'land_water_map': 0.0,
        'ndvi': 0.0,
        'ndvi_sdev': 0.0,
        'num_obs': 0.0,
        'temperature': 0.0,
        'temperature_sdev': 0.0
    },
    'NASA/FLDAS/NOAH01/C/GL/M/V001': {
        'Evap_tavg': 0.0,
        'LWdown_f_tavg': 0.0,
        'Lwnet_tavg': 0.0,
        'Psurf_f_tavg': 0.0,
        'Qair_f_tavg': 0.0,
        'Qg_tavg': 0.0,
        'Qh_tavg': 0.0,
        'Qle_tavg': 0.0,
        'Qs_tavg': 0.0,
        'Qsb_tavg': 0.0,
        'RadT_tavg': 0.0,
        'Rainf_f_tavg': 0.0,
        'SWE_inst': 0.0,
        'SWdown_f_tavg': 0.0,
        'SnowCover_inst': 0.0,
        'SnowDepth_inst': 0.0,
        'Snowf_tavg': 0.0,
        'SoilMoi00_10cm_tavg': 0.0,
        'SoilMoi100_200cm_tavg': 0.0,
        'SoilMoi10_40cm_tavg': 0.0,
        'SoilMoi40_100cm_tavg': 0.0,
        'SoilTemp00_10cm_tavg': 0.0,
        'SoilTemp100_200cm_tavg': 0.0,
        'SoilTemp10_40cm_tavg': 0.0,
        'SoilTemp40_100cm_tavg': 0.0,
        'Swnet_tavg': 0.0,
        'Tair_f_tavg': 0.0,
        'Wind_f_tavg': 0.0
    },
    'NASA/GEOS-CF/v1/rpl/htf': {
        'CO': 0.0,
        'NO2': 0.0,
        'O3': 0.0,
        'PM25_RH35_GCC': 0.0,
        'PM25_RH35_GOCART': 0.0,
        'Q': 0.0,
        'RH': 0.0,
        'SLP': 0.0,
        'SO2': 0.0,
        'T': 0.0,
        'U': 0.0,
        'V': 0.0
    },
    'NASA/GEOS-CF/v1/rpl/tavg1hr': {
        'ACET': 0.0,
        'ALD2': 0.0,
        'ALK4': 0.0,
        'AOD550_BC': 0.0,
        'AOD550_CLOUD': 0.0,
        'AOD550_DST1': 0.0,
        'AOD550_DST2': 0.0,
        'AOD550_DST3': 0.0,
        'AOD550_DST4': 0.0,
        'AOD550_DST5': 0.0,
        'AOD550_DST6': 0.0,
        'AOD550_DST7': 0.0,
        'AOD550_DUST': 0.0,
        'AOD550_OC': 0.0,
        'AOD550_SALA': 0.0,
        'AOD550_SALC': 0.0,
        'AOD550_SULFATE': 0.0,
        'BCPI': 0.0,
        'BCPO': 0.0,
        'BENZ': 0.0,
        'C2H6': 0.0,
        'C3H8': 0.0,
        'CH4': 0.0,
        'CLDTT': 0.0,
        'CO': 0.0,
        'DRYDEPFLX_BCPI': 0.0,
        'DRYDEPFLX_BCPO': 0.0,
        'DRYDEPFLX_DST1': 0.0,
        'DRYDEPFLX_DST2': 0.0,
        'DRYDEPFLX_DST3': 0.0,
        'DRYDEPFLX_DST4': 0.0,
        'DRYDEPFLX_HCHO': 0.0,
        'DRYDEPFLX_HNO3': 0.0,
        'DRYDEPFLX_NH3': 0.0,
        'DRYDEPFLX_NH4': 0.0,
        'DRYDEPFLX_NIT': 0.0,
        'DRYDEPFLX_NO2': 0.0,
        'DRYDEPFLX_O3': 0.0,
        'DRYDEPFLX_OCPI': 0.0,
        'DRYDEPFLX_OCPO': 0.0,
        'DRYDEPFLX_SALA': 0.0,
        'DRYDEPFLX_SALC': 0.0,
        'DST1': 0.0,
        'DST2': 0.0,
        'DST3': 0.0,
        'DST4': 0.0,
        'EOH': 0.0,
        'H2O2': 0.0,
        'HCHO': 0.0,
        'HNO3': 0.0,
        'HNO4': 0.0,
        'ISOP': 0.0,
        'MACR': 0.0,
        'MEK': 0.0,
        'MVK': 0.0,
        'N2O5': 0.0,
        'NH3': 0.0,
        'NH4': 0.0,
        'NIT': 0.0,
        'NO': 0.0,
        'NO2': 0.0,
        'NOy': 0.0,
        'O3': 0.0,
        'OCPI': 0.0,
        'OCPO': 0.0,
        'PAN': 0.0,
        'PHIS': 0.0,
        'PM25_RH35_GCC': 0.0,
        'PM25_RH35_GOCART': 0.0,
        'PM25bc_RH35_GCC': 0.0,
        'PM25du_RH35_GCC': 0.0,
        'PM25ni_RH35_GCC': 0.0,
        'PM25oc_RH35_GCC': 0.0,
        'PM25soa_RH35_GCC': 0.0,
        'PM25ss_RH35_GCC': 0.0,
        'PM25su_RH35_GCC': 0.0,
        'PRPE': 0.0,
        'PS': 0.0,
        'Q': 0.0,
        'Q10M': 0.0,
        'Q2M': 0.0,
        'RCHO': 0.0,
        'RH': 0.0,
        'SALA': 0.0,
        'SALC': 0.0,
        'SLP': 0.0,
        'SO2': 0.0,
        'SOAP': 0.0,
        'SOAS': 0.0,
        'T': 0.0,
        'T10M': 0.0,
        'T2M': 0.0,
        'TOLU': 0.0,
        'TOTCOL_BrO': 0.0,
        'TOTCOL_CO': 0.0,
        'TOTCOL_HCHO': 0.0,
        'TOTCOL_IO': 0.0,
        'TOTCOL_NO2': 0.0,
        'TOTCOL_O3': 0.0,
        'TOTCOL_SO2': 0.0,
        'TPREC': 0.0,
        'TROPCOL_BrO': 0.0,
        'TROPCOL_CO': 0.0,
        'TROPCOL_HCHO': 0.0,
        'TROPCOL_IO': 0.0,
        'TROPCOL_NO2': 0.0,
        'TROPCOL_O3': 0.0,
        'TROPCOL_SO2': 0.0,
        'TROPPB': 0.0,
        'TS': 0.0,
        'U': 0.0,
        'U10M': 0.0,
        'U2M': 0.0,
        'V': 0.0,
        'V10M': 0.0,
        'V2M': 0.0,
        'WETDEPFLX_BCPI': 0.0,
        'WETDEPFLX_BCPO': 0.0,
        'WETDEPFLX_DST1': 0.0,
        'WETDEPFLX_DST2': 0.0,
        'WETDEPFLX_DST3': 0.0,
        'WETDEPFLX_DST4': 0.0,
        'WETDEPFLX_HCHO': 0.0,
        'WETDEPFLX_HNO3': 0.0,
        'WETDEPFLX_NH3': 0.0,
        'WETDEPFLX_NH4': 0.0,
        'WETDEPFLX_NIT': 0.0,
        'WETDEPFLX_OCPI': 0.0,
        'WETDEPFLX_OCPO': 0.0,
        'WETDEPFLX_SALA': 0.0,
        'WETDEPFLX_SALC': 0.0,
        'WETDEPFLX_SO2': 0.0,
        'WETDEPFLX_SO4': 0.0,
        'XYLE': 0.0,
        'ZL': 0.0,
        'ZPBL': 0.0
    },
    'NASA/GIMMS/3GV0': {
        'ndvi': 0.0,
        'qa': 0.0
    },
    'NASA/GLDAS/V021/NOAH/G025/T3H': {
        'Albedo_inst': 0.0,
        'AvgSurfT_inst': 0.0,
        'CanopInt_inst': 0.0,
        'ECanop_tavg': 0.0,
        'ESoil_tavg': 0.0,
        'Evap_tavg': 0.0,
        'LWdown_f_tavg': 0.0,
        'Lwnet_tavg': 0.0,
        'PotEvap_tavg': 0.0,
        'Psurf_f_inst': 0.0,
        'Qair_f_inst': 0.0,
        'Qg_tavg': 0.0,
        'Qh_tavg': 0.0,
        'Qle_tavg': 0.0,
        'Qs_acc': 0.0,
        'Qsb_acc': 0.0,
        'Qsm_acc': 0.0,
        'Rainf_f_tavg': 0.0,
        'Rainf_tavg': 0.0,
        'RootMoist_inst': 0.0,
        'SWE_inst': 0.0,
        'SWdown_f_tavg': 0.0,
        'SnowDepth_inst': 0.0,
        'Snowf_tavg': 0.0,
        'SoilMoi0_10cm_inst': 0.0,
        'SoilMoi100_200cm_inst': 0.0,
        'SoilMoi10_40cm_inst': 0.0,
        'SoilMoi40_100cm_inst': 0.0,
        'SoilTMP0_10cm_inst': 0.0,
        'SoilTMP100_200cm_inst': 0.0,
        'SoilTMP10_40cm_inst': 0.0,
        'SoilTMP40_100cm_inst': 0.0,
        'Swnet_tavg': 0.0,
        'Tair_f_inst': 0.0,
        'Tveg_tavg': 0.0,
        'Wind_f_inst': 0.0
    },
    'NASA/GLDAS/V022/CLSM/G025/DA1D': {
        'ACond_tavg': 0.0,
        'AvgSurfT_tavg': 0.0,
        'CanopInt_tavg': 0.0,
        'ECanop_tavg': 0.0,
        'ESoil_tavg': 0.0,
        'EvapSnow_tavg': 0.0,
        'Evap_tavg': 0.0,
        'GWS_tavg': 0.0,
        'Lwnet_tavg': 0.0,
        'Qg_tavg': 0.0,
        'Qh_tavg': 0.0,
        'Qle_tavg': 0.0,
        'Qs_tavg': 0.0,
        'Qsb_tavg': 0.0,
        'Qsm_tavg': 0.0,
        'SWE_tavg': 0.0,
        'SnowDepth_tavg': 0.0,
        'SnowT_tavg': 0.0,
        'SoilMoist_P_tavg': 0.0,
        'SoilMoist_RZ_tavg': 0.0,
        'SoilMoist_S_tavg': 0.0,
        'Swnet_tavg': 0.0,
        'TVeg_tavg': 0.0,
        'TWS_tavg': 0.0
    },
    'NASA/GLDAS/V20/NOAH/G025/T3H': {
        'Albedo_inst': 0.0,
        'AvgSurfT_inst': 0.0,
        'CanopInt_inst': 0.0,
        'ECanop_tavg': 0.0,
        'ESoil_tavg': 0.0,
        'Evap_tavg': 0.0,
        'LWdown_f_tavg': 0.0,
        'Lwnet_tavg': 0.0,
        'PotEvap_tavg': 0.0,
        'Psurf_f_inst': 0.0,
        'Qair_f_inst': 0.0,
        'Qg_tavg': 0.0,
        'Qh_tavg': 0.0,
        'Qle_tavg': 0.0,
        'Qs_acc': 0.0,
        'Qsb_acc': 0.0,
        'Qsm_acc': 0.0,
        'Rainf_f_tavg': 0.0,
        'Rainf_tavg': 0.0,
        'RootMoist_inst': 0.0,
        'SWE_inst': 0.0,
        'SWdown_f_tavg': 0.0,
        'SnowDepth_inst': 0.0,
        'Snowf_tavg': 0.0,
        'SoilMoi0_10cm_inst': 0.0,
        'SoilMoi100_200cm_inst': 0.0,
        'SoilMoi10_40cm_inst': 0.0,
        'SoilMoi40_100cm_inst': 0.0,
        'SoilTMP0_10cm_inst': 0.0,
        'SoilTMP100_200cm_inst': 0.0,
        'SoilTMP10_40cm_inst': 0.0,
        'SoilTMP40_100cm_inst': 0.0,
        'Swnet_tavg': 0.0,
        'Tair_f_inst': 0.0,
        'Tveg_tavg': 0.0,
        'Wind_f_inst': 0.0
    },
    'NASA/GPM_L3/IMERG_MONTHLY_V06': {
        'gaugeRelativeWeighting': 0.0,
        'precipitation': 0.0,
        'precipitationQualityIndex': 0.0,
        'probabilityLiquidPrecipitation': 0.0,
        'randomError': 0.0
    },
    'NASA/GPM_L3/IMERG_V06': {
        'HQobservationTime': 0.0,
        'HQprecipSource': 0.0,
        'HQprecipitation': 0.0,
        'IRkalmanFilterWeight': 0.0,
        'IRprecipitation': 0.0,
        'precipitationCal': 0.0,
        'precipitationUncal': 0.0,
        'probabilityLiquidPrecipitation': 0.0,
        'randomError': 0.0
    },
    'NASA/GRACE/MASS_GRIDS/LAND': {
        'lwe_thickness_csr': 0.0,
        'lwe_thickness_gfz': 0.0,
        'lwe_thickness_jpl': 0.0
    },
    'NASA/GRACE/MASS_GRIDS/MASCON': {
        'lwe_thickness': 0.0,
        'uncertainty': 0.0
    },
    'NASA/GRACE/MASS_GRIDS/MASCON_CRI': {
        'lwe_thickness': 0.0,
        'uncertainty': 0.0
    },
    'NASA/GRACE/MASS_GRIDS/OCEAN': {
        'lwe_thickness_csr': 0.0,
        'lwe_thickness_gfz': 0.0,
        'lwe_thickness_jpl': 0.0
    },
    'NASA/GRACE/MASS_GRIDS/OCEAN_EOFR': {
        'lwe_thickness_csr': 0.0,
        'lwe_thickness_gfz': 0.0,
        'lwe_thickness_jpl': 0.0
    },
    'NASA/GSFC/MERRA/aer/2': {
        'BCANGSTR': 0.0,
        'BCCMASS': 0.0,
        'BCEXTTAU': 0.0,
        'BCFLUXU': 0.0,
        'BCFLUXV': 0.0,
        'BCSCATAU': 0.0,
        'BCSMASS': 0.0,
        'DMSCMASS': 0.0,
        'DMSSMASS': 0.0,
        'DUANGSTR': 0.0,
        'DUCMASS': 0.0,
        'DUCMASS25': 0.0,
        'DUEXTT25': 0.0,
        'DUEXTTAU': 0.0,
        'DUFLUXU': 0.0,
        'DUFLUXV': 0.0,
        'DUSCAT25': 0.0,
        'DUSCATAU': 0.0,
        'DUSMASS': 0.0,
        'DUSMASS25': 0.0,
        'OCANGSTR': 0.0,
        'OCCMASS': 0.0,
        'OCEXTTAU': 0.0,
        'OCFLUXU': 0.0,
        'OCFLUXV': 0.0,
        'OCSCATAU': 0.0,
        'OCSMASS': 0.0,
        'SO2CMASS': 0.0,
        'SO2SMASS': 0.0,
        'SO4CMASS': 0.0,
        'SO4SMASS': 0.0,
        'SSANGSTR': 0.0,
        'SSCMASS': 0.0,
        'SSCMASS25': 0.0,
        'SSEXTT25': 0.0,
        'SSEXTTAU': 0.0,
        'SSFLUXU': 0.0,
        'SSFLUXV': 0.0,
        'SSSCAT25': 0.0,
        'SSSCATAU': 0.0,
        'SSSMASS': 0.0,
        'SSSMASS25': 0.0,
        'SUANGSTR': 0.0,
        'SUEXTTAU': 0.0,
        'SUFLUXU': 0.0,
        'SUFLUXV': 0.0,
        'SUSCATAU': 0.0,
        'TOTANGSTR': 0.0,
        'TOTEXTTAU': 0.0,
        'TOTSCATAU': 0.0
    },
    'NASA/GSFC/MERRA/flx/2': {
        'BSTAR': 0.0,
        'CDH': 0.0,
        'CDM': 0.0,
        'CDQ': 0.0,
        'CN': 0.0,
        'DISPH': 0.0,
        'EFLUX': 0.0,
        'EVAP': 0.0,
        'FRCAN': 0.0,
        'FRCCN': 0.0,
        'FRCLS': 0.0,
        'FRSEAICE': 0.0,
        'GHTSKIN': 0.0,
        'HFLUX': 0.0,
        'HLML': 0.0,
        'NIRDF': 0.0,
        'NIRDR': 0.0,
        'PBLH': 0.0,
        'PGENTOT': 0.0,
        'PRECANV': 0.0,
        'PRECCON': 0.0,
        'PRECLSC': 0.0,
        'PRECSNO': 0.0,
        'PRECTOT': 0.0,
        'PRECTOTCORR': 0.0,
        'PREVTOT': 0.0,
        'QLML': 0.0,
        'QSH': 0.0,
        'QSTAR': 0.0,
        'RHOA': 0.0,
        'RISFC': 0.0,
        'SPEED': 0.0,
        'SPEEDMAX': 0.0,
        'TAUGWX': 0.0,
        'TAUGWY': 0.0,
        'TAUX': 0.0,
        'TAUY': 0.0,
        'TCZPBL': 0.0,
        'TLML': 0.0,
        'TSH': 0.0,
        'TSTAR': 0.0,
        'ULML': 0.0,
        'USTAR': 0.0,
        'VLML': 0.0,
        'Z0H': 0.0,
        'Z0M': 0.0
    },
    'NASA/GSFC/MERRA/lnd/2': {
        'BASEFLOW': 0.0,
        'ECHANGE': 0.0,
        'EVLAND': 0.0,
        'EVPINTR': 0.0,
        'EVPSBLN': 0.0,
        'EVPSOIL': 0.0,
        'EVPTRNS': 0.0,
        'FRSAT': 0.0,
        'FRSNO': 0.0,
        'FRUNST': 0.0,
        'FRWLT': 0.0,
        'GHLAND': 0.0,
        'GRN': 0.0,
        'GWETPROF': 0.0,
        'GWETROOT': 0.0,
        'GWETTOP': 0.0,
        'LAI': 0.0,
        'LHLAND': 0.0,
        'LWLAND': 0.0,
        'PARDFLAND': 0.0,
        'PARDRLAND': 0.0,
        'PRECSNOLAND': 0.0,
        'PRECTOTLAND': 0.0,
        'PRMC': 0.0,
        'QINFIL': 0.0,
        'RUNOFF': 0.0,
        'RZMC': 0.0,
        'SFMC': 0.0,
        'SHLAND': 0.0,
        'SMLAND': 0.0,
        'SNODP': 0.0,
        'SNOMAS': 0.0,
        'SPLAND': 0.0,
        'SPSNOW': 0.0,
        'SPWATR': 0.0,
        'SWLAND': 0.0,
        'TELAND': 0.0,
        'TPSNOW': 0.0,
        'TSAT': 0.0,
        'TSOIL1': 0.0,
        'TSOIL2': 0.0,
        'TSOIL3': 0.0,
        'TSOIL4': 0.0,
        'TSOIL5': 0.0,
        'TSOIL6': 0.0,
        'TSURF': 0.0,
        'TUNST': 0.0,
        'TWLAND': 0.0,
        'TWLT': 0.0,
        'WCHANGE': 0.0
    },
    'NASA/GSFC/MERRA/rad/2': {
        'ALBEDO': 0.0,
        'ALBNIRDF': 0.0,
        'ALBNIRDR': 0.0,
        'ALBVISDF': 0.0,
        'ALBVISDR': 0.0,
        'CLDHGH': 0.0,
        'CLDLOW': 0.0,
        'CLDMID': 0.0,
        'CLDTOT': 0.0,
        'EMIS': 0.0,
        'LWGAB': 0.0,
        'LWGABCLR': 0.0,
        'LWGABCLRCLN': 0.0,
        'LWGEM': 0.0,
        'LWGNT': 0.0,
        'LWGNTCLR': 0.0,
        'LWGNTCLRCLN': 0.0,
        'LWTUP': 0.0,
        'LWTUPCLR': 0.0,
        'LWTUPCLRCLN': 0.0,
        'SWGDN': 0.0,
        'SWGDNCLR': 0.0,
        'SWGNT': 0.0,
        'SWGNTCLN': 0.0,
        'SWGNTCLR': 0.0,
        'SWGNTCLRCLN': 0.0,
        'SWTDN': 0.0,
        'SWTNT': 0.0,
        'SWTNTCLN': 0.0,
        'SWTNTCLR': 0.0,
        'SWTNTCLRCLN': 0.0,
        'TAUHGH': 0.0,
        'TAULOW': 0.0,
        'TAUMID': 0.0,
        'TAUTOT': 0.0,
        'TS': 0.0
    },
    'NASA/GSFC/MERRA/slv/2': {
        'CLDPRS': 0.0,
        'CLDTMP': 0.0,
        'DISPH': 0.0,
        'H1000': 0.0,
        'H250': 0.0,
        'H500': 0.0,
        'H850': 0.0,
        'OMEGA500': 0.0,
        'PBLTOP': 0.0,
        'PS': 0.0,
        'Q250': 0.0,
        'Q500': 0.0,
        'Q850': 0.0,
        'QV10M': 0.0,
        'QV2M': 0.0,
        'SLP': 0.0,
        'T10M': 0.0,
        'T250': 0.0,
        'T2M': 0.0,
        'T2MDEW': 0.0,
        'T2MWET': 0.0,
        'T500': 0.0,
        'T850': 0.0,
        'TO3': 0.0,
        'TOX': 0.0,
        'TQI': 0.0,
        'TQL': 0.0,
        'TQV': 0.0,
        'TROPPB': 0.0,
        'TROPPT': 0.0,
        'TROPPV': 0.0,
        'TROPQ': 0.0,
        'TROPT': 0.0,
        'TS': 0.0,
        'U10M': 0.0,
        'U250': 0.0,
        'U2M': 0.0,
        'U500': 0.0,
        'U50M': 0.0,
        'U850': 0.0,
        'V10M': 0.0,
        'V250': 0.0,
        'V2M': 0.0,
        'V500': 0.0,
        'V50M': 0.0,
        'V850': 0.0,
        'ZLCL': 0.0
    },
    'NASA/JPL/global_forest_canopy_height_2005': {
        '1': 0.0
    },
    'NASA/MEASURES/GFCC/TC/v3': {
        'source_index': 0.0,
        'tree_canopy_cover': 0.0,
        'uncertainty': 0.0
    },
    'NASA/NASADEM_HGT/001': {
        'elevation': 0.0,
        'num': 0.0,
        'swb': 0.0
    },
    'NASA/NEX-DCP30': {
        'pr': 0.0,
        'tasmax': 0.0,
        'tasmin': 0.0
    },
    'NASA/NEX-DCP30_ENSEMBLE_STATS': {
        'pr_mean': 0.0,
        'pr_median': 0.0,
        'pr_quartile25': 0.0,
        'pr_quartile75': 0.0,
        'tasmax_mean': 0.0,
        'tasmax_median': 0.0,
        'tasmax_quartile25': 0.0,
        'tasmax_quartile75': 0.0,
        'tasmin_mean': 0.0,
        'tasmin_median': 0.0,
        'tasmin_quartile25': 0.0,
        'tasmin_quartile75': 0.0
    },
    'NASA/NEX-GDDP': {
        'pr': 0.0,
        'tasmax': 0.0,
        'tasmin': 0.0
    },
    'NASA/NLDAS/FORA0125_H002': {
        'convective_fraction': 0.0,
        'longwave_radiation': 0.0,
        'potential_energy': 0.0,
        'potential_evaporation': 0.0,
        'pressure': 0.0,
        'shortwave_radiation': 0.0,
        'specific_humidity': 0.0,
        'temperature': 0.0,
        'total_precipitation': 0.0,
        'wind_u': 0.0,
        'wind_v': 0.0
    },
    'NASA/OCEANDATA/MODIS-Aqua/L3SMI': {
        'Rrs_412': 0.0,
        'Rrs_443': 0.0,
        'Rrs_469': 0.0,
        'Rrs_488': 0.0,
        'Rrs_531': 0.0,
        'Rrs_547': 0.0,
        'Rrs_555': 0.0,
        'Rrs_645': 0.0,
        'Rrs_667': 0.0,
        'Rrs_678': 0.0,
        'chlor_a': 0.0,
        'nflh': 0.0,
        'poc': 0.0,
        'sst': 0.0
    },
    'NASA/OCEANDATA/MODIS-Terra/L3SMI': {
        'Rrs_412': 0.0,
        'Rrs_443': 0.0,
        'Rrs_469': 0.0,
        'Rrs_488': 0.0,
        'Rrs_531': 0.0,
        'Rrs_547': 0.0,
        'Rrs_555': 0.0,
        'Rrs_645': 0.0,
        'Rrs_667': 0.0,
        'Rrs_678': 0.0,
        'chlor_a': 0.0,
        'nflh': 0.0,
        'poc': 0.0,
        'sst': 0.0
    },
    'NASA/OCEANDATA/SeaWiFS/L3SMI': {
        'Rrs_412': 0.0,
        'Rrs_443': 0.0,
        'Rrs_490': 0.0,
        'Rrs_510': 0.0,
        'Rrs_555': 0.0,
        'Rrs_670': 0.0,
        'chlor_a': 0.0,
        'poc': 0.0
    },
    'NASA/ORNL/DAYMET_V3': {
        'dayl': 0.0,
        'prcp': 0.0,
        'srad': 0.0,
        'swe': 0.0,
        'tmax': 0.0,
        'tmin': 0.0,
        'vp': 0.0
    },
    'NASA/ORNL/DAYMET_V4': {
        'dayl': 0.0,
        'prcp': 0.0,
        'srad': 0.0,
        'swe': 0.0,
        'tmax': 0.0,
        'tmin': 0.0,
        'vp': 0.0
    },
    'NASA/ORNL/biomass_carbon_density/v1': {
        'agb': 0.0,
        'agb_uncertainty': 0.0,
        'bgb': 0.0,
        'bgb_uncertainty': 0.0
    },
    'NASA_USDA/HSL/SMAP10KM_soil_moisture': {
        'smp': 0.0,
        'ssm': 0.0,
        'ssma': 0.0,
        'susm': 0.0,
        'susma': 0.0
    },
    'NASA_USDA/HSL/SMAP_soil_moisture': {
        'smp': 0.0,
        'ssm': 0.0,
        'ssma': 0.0,
        'susm': 0.0,
        'susma': 0.0
    },
    'NASA_USDA/HSL/soil_moisture': {
        'smp': 0.0,
        'ssm': 0.0,
        'ssma': 0.0,
        'susm': 0.0,
        'susma': 0.0
    },
    'NCEP_RE/sea_level_pressure': {
        'slp': 0.0
    },
    'NCEP_RE/surface_temp': {
        'air': 0.0
    },
    'NCEP_RE/surface_wv': {
        'pr_wtr': 0.0
    },
    'NOAA/CDR/ATMOS_NEAR_SURFACE/V2': {
        'air_temperature': 0.0,
        'fill_missing_qc': 0.0,
        'specific_humidity': 0.0,
        'wind_speed': 0.0
    },
    'NOAA/CDR/AVHRR/AOT/V3': {
        'aot': 0.0
    },
    'NOAA/CDR/AVHRR/LAI_FAPAR/V4': {
        'FAPAR': 0.0,
        'LAI': 0.0,
        'QA': 0.0
    },
    'NOAA/CDR/AVHRR/LAI_FAPAR/V5': {
        'FAPAR': 0.0,
        'LAI': 0.0,
        'QA': 0.0
    },
    'NOAA/CDR/AVHRR/NDVI/V4': {
        'NDVI': 0.0,
        'QA': 0.0,
        'TIMEOFDAY': 0.0
    },
    'NOAA/CDR/AVHRR/NDVI/V5': {
        'NDVI': 0.0,
        'QA': 0.0,
        'TIMEOFDAY': 0.0
    },
    'NOAA/CDR/AVHRR/SR/V4': {
        'BT_CH3': 0.0,
        'BT_CH4': 0.0,
        'BT_CH5': 0.0,
        'QA': 0.0,
        'RELAZ': 0.0,
        'SREFL_CH1': 0.0,
        'SREFL_CH2': 0.0,
        'SREFL_CH3': 0.0,
        'SZEN': 0.0,
        'TIMEOFDAY': 0.0,
        'VZEN': 0.0
    },
    'NOAA/CDR/AVHRR/SR/V5': {
        'BT_CH3': 0.0,
        'BT_CH4': 0.0,
        'BT_CH5': 0.0,
        'QA': 0.0,
        'RELAZ': 0.0,
        'SREFL_CH1': 0.0,
        'SREFL_CH2': 0.0,
        'SREFL_CH3': 0.0,
        'SZEN': 0.0,
        'TIMEOFDAY': 0.0,
        'VZEN': 0.0
    },
    'NOAA/CDR/GRIDSAT-B1/V2': {
        'irwin_2': 200,
        'irwin_3': 200,
        'irwin_cdr': 200,
        'irwin_vza_adj': -10,
        'irwvp': 200,
        'irwvp_2': 200,
        'satid_ir1': 0.0,
        'satid_ir2': 0.0,
        'satid_ir3': 0.0,
        'satid_vs1': 0.0,
        'satid_vs2': 0.0,
        'satid_wv1': 0.0,
        'satid_wv2': 0.0,
        'vschn': 1,
        'vschn_2': 1
    },
    'NOAA/CDR/HEAT_FLUXES/V2': {
        'fill_missing_qc': 0.0,
        'surface_upward_latent_heat_flux': 0.0,
        'surface_upward_sensible_heat_flux': 0.0
    },
    'NOAA/CDR/OISST/V2': {
        'anom': 0.0,
        'err': 0.0,
        'ice': 0.0,
        'sst': 0.0
    },
    'NOAA/CDR/OISST/V2_1': {
        'anom': 0.0,
        'err': 0.0,
        'ice': 0.0,
        'sst': 0.0
    },
    'NOAA/CDR/PATMOSX/V53': {
        'acha_info': 0.0,
        'acha_quality': 0.0,
        'bad_pixel_mask': 0.0,
        'cld_emiss_acha': 0.5,
        'cld_height_acha': 10,
        'cld_height_uncer_acha': 5,
        'cld_opd_acha': 3.9,
        'cld_opd_dcomp': 79.9,
        'cld_opd_dcomp_unc': 79.9,
        'cld_press_acha': 550,
        'cld_reff_acha': 80,
        'cld_reff_dcomp': 80,
        'cld_reff_dcomp_unc': 80,
        'cld_temp_acha': 240,
        'cloud_fraction': 0.5,
        'cloud_fraction_uncertainty': 0.5,
        'cloud_mask': 0.0,
        'cloud_probability': 0.5,
        'cloud_transmission_0_65um': 0.5,
        'cloud_type': 0.0,
        'cloud_water_path': 600,
        'dcomp_info': 0.0,
        'dcomp_quality': 0.0,
        'glint_mask': 0.0,
        'land_class': 0.0,
        'refl_0_65um': 59,
        'refl_0_65um_counts': 0.0,
        'refl_0_65um_stddev_3x3': 10,
        'refl_0_86um': 59,
        'refl_0_86um_counts': 0.0,
        'refl_1_60um': 59,
        'refl_1_60um_counts': 0.0,
        'refl_3_75um': 30,
        'relative_azimuth_angle': 90,
        'scan_element_number': 0.0,
        'scan_line_number': 0.0,
        'scan_line_time': 0.0,
        'sensor_zenith_angle': 45,
        'snow_class': 0.0,
        'solar_azimuth_angle': 0.0,
        'solar_zenith_angle': 90,
        'surface_temperature_retrieved': 280,
        'surface_type': 0.0,
        'temp_11_0um': 260,
        'temp_11_0um_clear_sky': 260,
        'temp_11_0um_stddev_3x3': 10.9,
        'temp_12_0um': 260,
        'temp_3_75um': 260
    },
    'NOAA/CDR/SST_PATHFINDER/V53': {
        'aerosol_dynamic_indicator': 1.1,
        'dt_analysis': 0.0,
        'l2p_flags': 0.0,
        'pathfinder_quality_level': 0.0,
        'quality_level': 0.0,
        'sea_ice_fraction': 0.0,
        'sea_surface_temperature': 273.15,
        'wind_speed': 0.0
    },
    'NOAA/CDR/SST_WHOI/V2': {
        'fill_missing_qc': 0.0,
        'sea_surface_temperature': 0.0
    },
    'NOAA/CFSR': {
        'Albedo_surface_3_Hour_Average': 0.0,
        'Canopy_water_evaporation_surface_3_Hour_Average': 0.0,
        'Categorical_Freezing_Rain_surface_3_Hour_Average': 0.0,
        'Categorical_Ice_Pellets_surface_3_Hour_Average': 0.0,
        'Categorical_Rain_surface': 0.0,
        'Categorical_Rain_surface_3_Hour_Average': 0.0,
        'Categorical_Snow_surface_3_Hour_Average': 0.0,
        'Clear_Sky_Downward_Long_Wave_Flux_surface_3_Hour_Average': 0.0,
        'Clear_Sky_Downward_Solar_Flux_surface_3_Hour_Average': 0.0,
        'Clear_Sky_Upward_Long_Wave_Flux_surface_3_Hour_Average': 0.0,
        'Clear_Sky_Upward_Solar_Flux_atmosphere_top_3_Hour_Average': 0.0,
        'Clear_sky_UV-B_Downward_Solar_Flux_surface_3_Hour_Average': 0.0,
        'Cloud_Work_Function_entire_atmosphere_single_layer_3_Hour_Average': 0.0,
        'Cloud_water_entire_atmosphere_single_layer': 0.0,
        'Convective_Precipitation_Rate_surface_3_Hour_Average': 0.0,
        'Convective_available_potential_energy_pressure_difference_layer': 0.0,
        'Convective_available_potential_energy_surface': 0.0,
        'Convective_precipitation_surface_3_Hour_Accumulation': 0.0,
        'Direct_Evaporation_from_Bare_Soil_surface_3_Hour_Average': 0.0,
        'Downward_Long-Wave_Radp_Flux_surface': 0.0,
        'Downward_Long-Wave_Radp_Flux_surface_3_Hour_Average': 0.0,
        'Downward_Short-Wave_Radiation_Flux_atmosphere_top_3_Hour_Average': 0.0,
        'Downward_Short-Wave_Radiation_Flux_surface': 0.0,
        'Downward_Short-Wave_Radiation_Flux_surface_3_Hour_Average': 0.0,
        'Exchange_Coefficient_surface': 0.0,
        'Frictional_Velocity_surface': 0.0,
        'Ground_Heat_Flux_surface': 0.0,
        'Ground_Heat_Flux_surface_3_Hour_Average': 0.0,
        'Ice_cover_surface': 0.0,
        'Ice_thickness_surface': 0.0,
        'Land_cover_0__sea_1__land_surface': 0.0,
        'Latent_heat_net_flux_surface': 0.0,
        'Latent_heat_net_flux_surface_3_Hour_Average': 0.0,
        'Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_150_cm': 0.0,
        'Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_25_cm': 0.0,
        'Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_5_cm': 0.0,
        'Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_70_cm': 0.0,
        'Maximum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval': 0.0,
        'Maximum_temperature_height_above_ground_3_Hour_Interval': 0.0,
        'Minimum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval': 0.0,
        'Minimum_temperature_height_above_ground_3_Hour_Interval': 0.0,
        'Momentum_flux_u-component_surface_3_Hour_Average': 0.0,
        'Momentum_flux_v-component_surface_3_Hour_Average': 0.0,
        'Planetary_Boundary_Layer_Height_surface': 0.0,
        'Plant_Canopy_Surface_Water_surface': 0.0,
        'Potential_Evaporation_Rate_surface': 0.0,
        'Potential_Evaporation_Rate_surface_3_Hour_Average': 0.0,
        'Precipitable_water_entire_atmosphere_single_layer': 0.0,
        'Precipitable_water_pressure_difference_layer': 0.0,
        'Precipitation_rate_surface_3_Hour_Average': 0.0,
        'Pressure_msl': 0.0,
        'Pressure_reduced_to_MSL_msl': 0.0,
        'Pressure_surface': 0.0,
        'Relative_humidity_entire_atmosphere_single_layer': 0.0,
        'Sensible_heat_net_flux_surface': 0.0,
        'Sensible_heat_net_flux_surface_3_Hour_Average': 0.0,
        'Snow_Cover_surface_3_Hour_Average': 0.0,
        'Snow_Phase_Change_Heat_Flux_surface_3_Hour_Average': 0.0,
        'Snow_depth_surface': 0.0,
        'Soil_moisture_content_depth_below_surface_layer': 0.0,
        'Soil_type_surface': 0.0,
        'Specific_humidity_height_above_ground': 0.0,
        'Storm_Surface_Runoff_surface_3_Hour_Accumulation': 0.0,
        'Sublimation_evaporation_from_snow_surface_3_Hour_Average': 0.0,
        'Surface_Lifted_Index_surface': 0.0,
        'Surface_Slope_Type_surface': 0.0,
        'Surface_roughness_surface': 0.0,
        'Temperature_depth_below_surface_layer_150_cm': 0.0,
        'Temperature_depth_below_surface_layer_25_cm': 0.0,
        'Temperature_depth_below_surface_layer_5_cm': 0.0,
        'Temperature_depth_below_surface_layer_70_cm': 0.0,
        'Temperature_height_above_ground': 0.0,
        'Temperature_surface': 0.0,
        'Total_cloud_cover_convective_cloud': 0.0,
        'Total_ozone_entire_atmosphere_single_layer': 0.0,
        'Total_precipitation_surface_3_Hour_Accumulation': 0.0,
        'Transpiration_surface_3_Hour_Average': 0.0,
        'UV-B_Downward_Solar_Flux_surface_3_Hour_Average': 0.0,
        'Upward_Long-Wave_Radp_Flux_atmosphere_top_3_Hour_Average': 0.0,
        'Upward_Long-Wave_Radp_Flux_surface': 0.0,
        'Upward_Long-Wave_Radp_Flux_surface_3_Hour_Average': 0.0,
        'Upward_Short-Wave_Radiation_Flux_atmosphere_top_3_Hour_Average': 0.0,
        'Upward_Short-Wave_Radiation_Flux_surface': 0.0,
        'Upward_Short-Wave_Radiation_Flux_surface_3_Hour_Average': 0.0,
        'Vegetation_Type_surface': 0.0,
        'Vegetation_surface': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_150_cm': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_25_cm': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_5_cm': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_70_cm': 0.0,
        'Water_equivalent_of_accumulated_snow_depth_surface': 0.0,
        'Water_runoff_surface_3_Hour_Accumulation': 0.0,
        'u-component_of_wind_hybrid': 0.0,
        'v-component_of_wind_hybrid': 0.0
    },
    'NOAA/CFSV2/FOR6H': {
        'Downward_Long-Wave_Radp_Flux_surface_6_Hour_Average': 0.0,
        'Downward_Short-Wave_Radiation_Flux_surface_6_Hour_Average': 0.0,
        'Geopotential_height_surface': 0.0,
        'Latent_heat_net_flux_surface_6_Hour_Average': 0.0,
        'Maximum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval': 0.0,
        'Maximum_temperature_height_above_ground_6_Hour_Interval': 0.0,
        'Minimum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval': 0.0,
        'Minimum_temperature_height_above_ground_6_Hour_Interval': 0.0,
        'Potential_Evaporation_Rate_surface_6_Hour_Average': 0.0,
        'Precipitation_rate_surface_6_Hour_Average': 0.0,
        'Pressure_surface': 0.0,
        'Sensible_heat_net_flux_surface_6_Hour_Average': 0.0,
        'Specific_humidity_height_above_ground': 0.0,
        'Temperature_height_above_ground': 0.0,
        'Upward_Long-Wave_Radp_Flux_surface_6_Hour_Average': 0.0,
        'Upward_Short-Wave_Radiation_Flux_surface_6_Hour_Average': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_150_cm': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_25_cm': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_5_cm': 0.0,
        'Volumetric_Soil_Moisture_Content_depth_below_surface_layer_70_cm': 0.0,
        'u-component_of_wind_height_above_ground': 0.0,
        'v-component_of_wind_height_above_ground': 0.0
    },
    'NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4': {
        'avg_vis': 0.0,
        'cf_cvg': 0.0
    },
    'NOAA/DMSP-OLS/NIGHTTIME_LIGHTS': {
        'avg_lights_x_pct': 0.0,
        'avg_vis': 0.0,
        'cf_cvg': 0.0,
        'stable_lights': 0.0
    },
    'NOAA/GFS0P25': {
        'downward_shortwave_radiation_flux': 0.0,
        'precipitable_water_entire_atmosphere': 0.0,
        'relative_humidity_2m_above_ground': 0.0,
        'specific_humidity_2m_above_ground': 0.0,
        'temperature_2m_above_ground': 0.0,
        'total_cloud_cover_entire_atmosphere': 0.0,
        'total_precipitation_surface': 0.0,
        'u_component_of_wind_10m_above_ground': 0.0,
        'v_component_of_wind_10m_above_ground': 0.0
    },
    'NOAA/GOES/16/FDCC': {
        'Area': 4000,
        'DQF': 0.0,
        'Mask': 0.0,
        'Power': 0.0,
        'Temp': 400
    },
    'NOAA/GOES/16/FDCF': {
        'Area': 4000,
        'DQF': 0.0,
        'Mask': 0.0,
        'Power': 0.0,
        'Temp': 400
    },
    'NOAA/GOES/16/MCMIPC': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/16/MCMIPF': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/16/MCMIPM': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/17/FDCC': {
        'Area': 4000,
        'DQF': 0.0,
        'Mask': 0.0,
        'Power': 0.0,
        'Temp': 400
    },
    'NOAA/GOES/17/FDCF': {
        'Area': 4000,
        'DQF': 0.0,
        'Mask': 0.0,
        'Power': 0.0,
        'Temp': 400
    },
    'NOAA/GOES/17/MCMIPC': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/17/MCMIPF': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/17/MCMIPM': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/18/FDCC': {
        'Area': 4000,
        'DQF': 0.0,
        'Mask': 0.0,
        'Power': 0.0,
        'Temp': 400
    },
    'NOAA/GOES/18/FDCF': {
        'Area': 4000,
        'DQF': 0.0,
        'Mask': 0.0,
        'Power': 0.0,
        'Temp': 400
    },
    'NOAA/GOES/18/MCMIPC': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/18/MCMIPF': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/GOES/18/MCMIPM': {
        'CMI_C01': 0.0,
        'CMI_C02': 0.0,
        'CMI_C03': 0.0,
        'CMI_C04': 0.0,
        'CMI_C05': 0.0,
        'CMI_C06': 0.0,
        'CMI_C07': 0.0,
        'CMI_C08': 0.0,
        'CMI_C09': 0.0,
        'CMI_C10': 0.0,
        'CMI_C11': 0.0,
        'CMI_C12': 0.0,
        'CMI_C13': 0.0,
        'CMI_C14': 0.0,
        'CMI_C15': 0.0,
        'CMI_C16': 0.0,
        'DQF_C01': 0.0,
        'DQF_C02': 0.0,
        'DQF_C03': 0.0,
        'DQF_C04': 0.0,
        'DQF_C05': 0.0,
        'DQF_C06': 0.0,
        'DQF_C07': 0.0,
        'DQF_C08': 0.0,
        'DQF_C09': 0.0,
        'DQF_C10': 0.0,
        'DQF_C11': 0.0,
        'DQF_C12': 0.0,
        'DQF_C13': 0.0,
        'DQF_C14': 0.0,
        'DQF_C15': 0.0,
        'DQF_C16': 0.0
    },
    'NOAA/NCEP_DOE_RE2/total_cloud_coverage': {
        'tcdc': 0.0
    },
    'NOAA/NGDC/ETOPO1': {
        'bedrock': 0.0,
        'ice_surface': 0.0
    },
    'NOAA/NWS/RTMA': {
        'ACPC01': 0.0,
        'DPT': 0.0,
        'GUST': 0.0,
        'HGT': 0.0,
        'PRES': 0.0,
        'SPFH': 0.0,
        'TCDC': 0.0,
        'TMP': 0.0,
        'UGRD': 0.0,
        'VGRD': 0.0,
        'VIS': 0.0,
        'WDIR': 0.0,
        'WIND': 0.0
    },
    'NOAA/PERSIANN-CDR': {
        'precipitation': 0.0
    },
    'NOAA/VIIRS/001/VNP09GA': {
        'I1': 0.0,
        'I2': 0.0,
        'I3': 0.0,
        'M1': 0.0,
        'M10': 0.0,
        'M11': 0.0,
        'M2': 0.0,
        'M3': 0.0,
        'M4': 0.0,
        'M5': 0.0,
        'M7': 0.0,
        'M8': 0.0,
        'QF1': 0.0,
        'QF2': 0.0,
        'QF3': 0.0,
        'QF4': 0.0,
        'QF5': 0.0,
        'QF6': 0.0,
        'QF7': 0.0,
        'SensorAzimuth': 0.0,
        'SensorZenith': 0.0,
        'SolarAzimuth': 0.0,
        'SolarZenith': 0.0,
        'iobs_res': 0.0,
        'num_observations_1km': 0.0,
        'num_observations_500m': 0.0,
        'obscov_1km': 0.0,
        'obscov_500m': 0.0,
        'orbit_pnt': 0.0
    },
    'NOAA/VIIRS/001/VNP13A1': {
        'EVI': 0.0,
        'EVI2': 0.0,
        'NDVI': 0.0,
        'NIR_reflectance': 0.0,
        'SWIR1_reflectance': 0.0,
        'SWIR2_reflectance': 0.0,
        'SWIR3_reflectance': 0.0,
        'VI_Quality': 0.0,
        'blue_reflectance': 0.0,
        'composite_day_of_the_year': 0.0,
        'green_reflectance': 0.0,
        'pixel_reliability': 0.0,
        'red_reflectance': 0.0,
        'relative_azimuth_angle': 0.0,
        'sun_zenith_angle': 0.0,
        'view_zenith_angle': 0.0
    },
    'NOAA/VIIRS/001/VNP14A1': {
        'FireMask': 0.0,
        'MaxFRP': 0.0,
        'QA': 0.0,
        'sample': 0.0
    },
    'NOAA/VIIRS/001/VNP22Q2': {
        'Date_Mid_Greenup_Phase_1': 0.0,
        'Date_Mid_Greenup_Phase_2': 0.0,
        'Date_Mid_Senescence_Phase_1': 0.0,
        'Date_Mid_Senescence_Phase_2': 0.0,
        'EVI2_Growing_Season_Area_1': 0.0,
        'EVI2_Growing_Season_Area_2': 0.0,
        'EVI2_Onset_Greenness_Increase_1': 0.0,
        'EVI2_Onset_Greenness_Increase_2': 0.0,
        'EVI2_Onset_Greenness_Maximum_1': 0.0,
        'EVI2_Onset_Greenness_Maximum_2': 0.0,
        'GLSP_QC_1': 0.0,
        'GLSP_QC_2': 0.0,
        'Greenness_Agreement_Growing_Season_1': 0.0,
        'Greenness_Agreement_Growing_Season_2': 0.0,
        'Growing_Season_Length_1': 0.0,
        'Growing_Season_Length_2': 0.0,
        'Onset_Greenness_Decrease_1': 0.0,
        'Onset_Greenness_Decrease_2': 0.0,
        'Onset_Greenness_Increase_1': 0.0,
        'Onset_Greenness_Increase_2': 0.0,
        'Onset_Greenness_Maximum_1': 0.0,
        'Onset_Greenness_Maximum_2': 0.0,
        'Onset_Greenness_Minimum_1': 0.0,
        'Onset_Greenness_Minimum_2': 0.0,
        'PGQ_Growing_Season_1': 0.0,
        'PGQ_Growing_Season_2': 0.0,
        'PGQ_Onset_Greenness_Decrease_1': 0.0,
        'PGQ_Onset_Greenness_Decrease_2': 0.0,
        'PGQ_Onset_Greenness_Increase_1': 0.0,
        'PGQ_Onset_Greenness_Increase_2': 0.0,
        'PGQ_Onset_Greenness_Maximum_1': 0.0,
        'PGQ_Onset_Greenness_Maximum_2': 0.0,
        'PGQ_Onset_Greenness_Minimum_1': 0.0,
        'PGQ_Onset_Greenness_Minimum_2': 0.0,
        'Rate_Greenness_Decrease_1': 0.0,
        'Rate_Greenness_Decrease_2': 0.0,
        'Rate_Greenness_Increase_1': 0.0,
        'Rate_Greenness_Increase_2': 0.0
    },
    'NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG': {
        'avg_rad': 0.0,
        'cf_cvg': 0.0
    },
    'NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG': {
        'avg_rad': 0.0,
        'cf_cvg': 0.0
    },
    'NRCan/CDEM': {
        'elevation': 0.0
    },
    'OREGONSTATE/PRISM/AN81d': {
        'ppt': 0.0,
        'tdmean': 0.0,
        'tmax': 0.0,
        'tmean': 0.0,
        'tmin': 0.0,
        'vpdmax': 0.0,
        'vpdmin': 0.0
    },
    'OREGONSTATE/PRISM/AN81m': {
        'ppt': 0.0,
        'tdmean': 0.0,
        'tmax': 0.0,
        'tmean': 0.0,
        'tmin': 0.0,
        'vpdmax': 0.0,
        'vpdmin': 0.0
    },
    'OREGONSTATE/PRISM/Norm81m': {
        'ppt': 0.0,
        'tdmean': 0.0,
        'tmax': 0.0,
        'tmean': 0.0,
        'tmin': 0.0,
        'vpdmax': 0.0,
        'vpdmin': 0.0
    },
    'OREGONSTATE/PRISM/Norm91m': {
        'ppt': 0.0,
        'solclear': 0.0,
        'solslope': 0.0,
        'soltotal': 0.0,
        'soltrans': 0.0,
        'tdmean': 0.0,
        'tmax': 0.0,
        'tmean': 0.0,
        'tmin': 0.0,
        'vpdmax': 0.0,
        'vpdmin': 0.0
    },
    'ORTHO/Switzerland/SWISSIMAGE/10cm': {
        'B': 0.0,
        'G': 0.0,
        'R': 0.0
    },
    'OSU/GIMP/2000_ICE_OCEAN_MASK': {
        'ice_mask': 0.0,
        'ocean_mask': 0.0
    },
    'OSU/GIMP/2000_IMAGERY_MOSAIC': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6_high_gain': 0.0,
        'B6_low_gain': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B8_radarsat': 0.0
    },
    'OSU/GIMP/DEM': {
        'elevation': 0.0
    },
    'OSU/GIMP/ICE_VELOCITY_OPT': {
        'error_x': 0.0,
        'error_y': 0.0,
        'velocity_x': 0.0,
        'velocity_y': 0.0
    },
    'OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2_0': {
        'et_ensemble_mad': 0.0,
        'et_ensemble_mad_count': 0.0,
        'et_ensemble_mad_index': 0.0,
        'et_ensemble_mad_max': 0.0,
        'et_ensemble_mad_min': 0.0,
        'et_ensemble_sam': 0.0
    },
    'OpenLandMap/CLM/CLM_LST_MOD11A2-DAYNIGHT_M/v01': {
        'apr': 0.0,
        'aug': 0.0,
        'dec': 0.0,
        'feb': 0.0,
        'jan': 0.0,
        'jul': 0.0,
        'jun': 0.0,
        'mar': 0.0,
        'may': 0.0,
        'nov': 0.0,
        'oct': 0.0,
        'sep': 0.0
    },
    'OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_M/v01': {
        'apr': 0.0,
        'aug': 0.0,
        'dec': 0.0,
        'feb': 0.0,
        'jan': 0.0,
        'jul': 0.0,
        'jun': 0.0,
        'mar': 0.0,
        'may': 0.0,
        'nov': 0.0,
        'oct': 0.0,
        'sep': 0.0
    },
    'OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_SD/v01': {
        'apr': 0.0,
        'aug': 0.0,
        'dec': 0.0,
        'feb': 0.0,
        'jan': 0.0,
        'jul': 0.0,
        'jun': 0.0,
        'mar': 0.0,
        'may': 0.0,
        'nov': 0.0,
        'oct': 0.0,
        'sep': 0.0
    },
    'OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01': {
        'apr': 0.0,
        'aug': 0.0,
        'dec': 0.0,
        'feb': 0.0,
        'jan': 0.0,
        'jul': 0.0,
        'jun': 0.0,
        'mar': 0.0,
        'may': 0.0,
        'nov': 0.0,
        'oct': 0.0,
        'sep': 0.0
    },
    'OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01': {
        'biome_type': 0.0
    },
    'OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01': {
        'annual': 0.0,
        'annualdiff': 0.0,
        'apr': 0.0,
        'aug': 0.0,
        'dec': 0.0,
        'feb': 0.0,
        'jan': 0.0,
        'jul': 0.0,
        'jun': 0.0,
        'mar': 0.0,
        'may': 0.0,
        'nov': 0.0,
        'oct': 0.0,
        'sep': 0.0
    },
    'OpenLandMap/SOL/SOL_BULKDENS-FINEEARTH_USDA-4A1H_M/v02': {
        'b0': 0.0,
        'b10': 0.0,
        'b100': 0.0,
        'b200': 0.0,
        'b30': 0.0,
        'b60': 0.0
    },
    'OpenLandMap/SOL/SOL_CLAY-WFRACTION_USDA-3A1A1A_M/v02': {
        'b0': 0.0,
        'b10': 0.0,
        'b100': 0.0,
        'b200': 0.0,
        'b30': 0.0,
        'b60': 0.0
    },
    'OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P/v01': {
        'grtgroup': 0.0
    },
    'OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX_C/v01': {
        'grtgroup': 0.0
    },
    'OpenLandMap/SOL/SOL_ORGANIC-CARBON_USDA-6A1C_M/v02': {
        'b0': 0.0,
        'b10': 0.0,
        'b100': 0.0,
        'b200': 0.0,
        'b30': 0.0,
        'b60': 0.0
    },
    'OpenLandMap/SOL/SOL_PH-H2O_USDA-4C1A2A_M/v02': {
        'b0': 0.0,
        'b10': 0.0,
        'b100': 0.0,
        'b200': 0.0,
        'b30': 0.0,
        'b60': 0.0
    },
    'OpenLandMap/SOL/SOL_SAND-WFRACTION_USDA-3A1A1A_M/v02': {
        'b0': 0.0,
        'b10': 0.0,
        'b100': 0.0,
        'b200': 0.0,
        'b30': 0.0,
        'b60': 0.0
    },
    'OpenLandMap/SOL/SOL_TEXTURE-CLASS_USDA-TT_M/v02': {
        'b0': 0.0,
        'b10': 0.0,
        'b100': 0.0,
        'b200': 0.0,
        'b30': 0.0,
        'b60': 0.0
    },
    'OpenLandMap/SOL/SOL_WATERCONTENT-33KPA_USDA-4B1C_M/v01': {
        'b0': 0.0,
        'b10': 0.0,
        'b100': 0.0,
        'b200': 0.0,
        'b30': 0.0,
        'b60': 0.0
    },
    'Oxford/MAP/EVI_5km_Monthly': {
        'FilledProportion': 0.0,
        'Mean': 0.0
    },
    'Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual': {
        'Barren_Or_Sparsely_Populated': 0.0,
        'Closed_Shrublands': 0.0,
        'Cropland_Natural_Vegetation_Mosaic': 0.0,
        'Croplands': 0.0,
        'Deciduous_Broadleaf_Forest': 0.0,
        'Deciduous_Needleleaf_Forest': 0.0,
        'Evergreen_Broadleaf_Forest': 0.0,
        'Evergreen_Needleleaf_Forest': 0.0,
        'Grasslands': 0.0,
        'Mixed_Forest': 0.0,
        'No_Data': 0.0,
        'Open_Shrublands': 0.0,
        'Overall_Class': 0.0,
        'Permanent_Wetlands': 0.0,
        'Savannas': 0.0,
        'Snow_And_Ice': 0.0,
        'Unclassified': 0.0,
        'Urban_And_Built_Up': 0.0,
        'Water': 0.0,
        'Woody_Savannas': 0.0
    },
    'Oxford/MAP/LST_Day_5km_Monthly': {
        'FilledProportion': 0.0,
        'Mean': 0.0
    },
    'Oxford/MAP/LST_Night_5km_Monthly': {
        'FilledProportion': 0.0,
        'Mean': 0.0
    },
    'Oxford/MAP/TCB_5km_Monthly': {
        'FilledProportion': 0.0,
        'Mean': 0.0
    },
    'Oxford/MAP/TCW_5km_Monthly': {
        'FilledProportion': 0.0,
        'Mean': 0.0
    },
    'Oxford/MAP/accessibility_to_cities_2015_v1_0': {
        'accessibility': 0.0
    },
    'Oxford/MAP/accessibility_to_healthcare_2019': {
        'accessibility': 0.0,
        'accessibility_walking_only': 0.0
    },
    'Oxford/MAP/friction_surface_2015_v1_0': {
        'friction': 0.0
    },
    'Oxford/MAP/friction_surface_2019': {
        'friction': 0.0,
        'friction_walking_only': 0.0
    },
    'RUB/RUBCLIM/LCZ/global_lcz_map/v1': {
        'LCZ': 0.0,
        'LCZ_Filter': 0.0,
        'LCZ_Probability': 0.0
    },
    'SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL': {
        'B': 0.0,
        'G': 0.0,
        'N': 0.0,
        'P': 0.0,
        'R': 0.0
    },
    'SKYSAT/GEN-A/PUBLIC/ORTHO/RGB': {
        'B': 0.0,
        'G': 0.0,
        'R': 0.0
    },
    'SNU/ESL/BESS/Rad/v1': {
        'PAR_Daily': 0.0,
        'PARdiff_Daily': 0.0,
        'RSDN_Daily': 0.0
    },
    'TERN/AET/CMRSET_LANDSAT_V2_1': {
        'ETa': 0.0,
        'pixel_qa': 0.0
    },
    'TERN/AET/CMRSET_LANDSAT_V2_2': {
        'ETa': 0.0,
        'pixel_qa': 0.0
    },
    'TOMS/MERGED': {
        'ozone': 0.0
    },
    'TRMM/3B42': {
        'HQprecipitation': 0.0,
        'IRprecipitation': 0.0,
        'precipitation': 0.0,
        'relativeError': 0.0,
        'satObservationTime': 0.0,
        'satPrecipitationSource': 0.0
    },
    'TRMM/3B43V7': {
        'gaugeRelativeWeighting': 0.0,
        'precipitation': 0.0,
        'relativeError': 0.0
    },
    'TUBerlin/BigEarthNet/v1': {
        'B1': 0.0,
        'B10': 0.0,
        'B11': 0.0,
        'B12': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B6': 0.0,
        'B7': 0.0,
        'B8': 0.0,
        'B8A': 0.0,
        'B9': 0.0
    },
    'Tsinghua/DESS/ChinaTerraceMap/v1': {
        'terrace': 0.0
    },
    'Tsinghua/FROM-GLC/GAIA/v10': {
        'change_year_index': 0.0
    },
    'UCSB-CHG/CHIRPS/DAILY': {
        'precipitation': 0.0
    },
    'UCSB-CHG/CHIRPS/PENTAD': {
        'precipitation': 0.0
    },
    'UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1': {
        'Primary_HT_forests': 0.0
    },
    'UMD/hansen/global_forest_change_2013': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2014': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2015': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2015_v1_3': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2016_v1_4': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2017_v1_5': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2018_v1_6': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2019_v1_7': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2020_v1_8': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMD/hansen/global_forest_change_2021_v1_9': {
        'datamask': 0.0,
        'first_b30': 0.0,
        'first_b40': 0.0,
        'first_b50': 0.0,
        'first_b70': 0.0,
        'gain': 0.0,
        'last_b30': 0.0,
        'last_b40': 0.0,
        'last_b50': 0.0,
        'last_b70': 0.0,
        'loss': 0.0,
        'lossyear': 0.0,
        'treecover2000': 0.0
    },
    'UMN/PGC/ArcticDEM/V2/2m': {
        'elevation': 0.0,
        'matchtag': 0.0
    },
    'UMN/PGC/ArcticDEM/V2/5m': {
        'elevation': 0.0,
        'matchtag': 0.0
    },
    'UMN/PGC/ArcticDEM/V3/2m': {
        'elevation': 0.0,
        'matchtag': 0.0
    },
    'UMN/PGC/ArcticDEM/V3/2m_mosaic': {
        'elevation': 0.0
    },
    'UMN/PGC/REMA/V1/2m': {
        'elevation': 0.0,
        'matchtag': 0.0
    },
    'UMN/PGC/REMA/V1/8m': {
        'elevation': 0.0,
        'matchtag': 0.0
    },
    'UMN/PGC/REMA/V1_1/8m': {
        'elevation': 0.0
    },
    'UMT/Climate/IrrMapper_RF/v1_0': {
        'classification': 0.0
    },
    'UMT/NTSG/v2/LANDSAT/GPP': {
        'GPP': 0.0,
        'QC': 0.0
    },
    'UMT/NTSG/v2/LANDSAT/NPP': {
        'QC': 0.0,
        'annualNPP': 0.0
    },
    'UMT/NTSG/v2/MODIS/GPP': {
        'GPP': 0.0,
        'QC': 0.0
    },
    'UMT/NTSG/v2/MODIS/NPP': {
        'QC': 0.0,
        'annualNPP': 0.0
    },
    'UQ/murray/Intertidal/v1_1/data_mask': {
        'datamask': 0.0
    },
    'UQ/murray/Intertidal/v1_1/global_intertidal': {
        'classification': 0.0
    },
    'UQ/murray/Intertidal/v1_1/qa_pixel_count': {
        'pixel_count': 0.0
    },
    'USDA/NAIP/DOQQ': {
        'B': 0.0,
        'G': 0.0,
        'N': 0.0,
        'R': 0.0
    },
    'USDA/NASS/CDL': {
        'confidence': 0.0,
        'cropland': 0.0,
        'cultivated': 0.0
    },
    'USFS/GTAC/LCMS/v2020-5': {
        'Change': 0.0,
        'Change_Raw_Probability_Fast-Loss': 0.0,
        'Change_Raw_Probability_Gain': 0.0,
        'Change_Raw_Probability_Slow-Loss': 0.0,
        'Land_Cover': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Grass-Forb-Herb-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Shrubs-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-or-Impervious': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Shrubs-Mix': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Shrubs': 0.0,
        'Land_Cover_Raw_Probability_Shrubs-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Snow-or-Ice': 0.0,
        'Land_Cover_Raw_Probability_Tall-Shrubs': 0.0,
        'Land_Cover_Raw_Probability_Tall-Shrubs-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Trees': 0.0,
        'Land_Cover_Raw_Probability_Water': 0.0,
        'Land_Use': 0.0,
        'Land_Use_Raw_Probability_Agriculture': 0.0,
        'Land_Use_Raw_Probability_Developed': 0.0,
        'Land_Use_Raw_Probability_Forest': 0.0,
        'Land_Use_Raw_Probability_Non-Forest-Wetland': 0.0,
        'Land_Use_Raw_Probability_Other': 0.0,
        'Land_Use_Raw_Probability_Rangeland-or-Pasture': 0.0
    },
    'USFS/GTAC/LCMS/v2020-6': {
        'Change': 0.0,
        'Change_Raw_Probability_Fast-Loss': 0.0,
        'Change_Raw_Probability_Gain': 0.0,
        'Change_Raw_Probability_Slow-Loss': 0.0,
        'Land_Cover': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Grass-Forb-Herb-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Shrubs-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-or-Impervious': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Shrubs-Mix': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Shrubs': 0.0,
        'Land_Cover_Raw_Probability_Shrubs-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Snow-or-Ice': 0.0,
        'Land_Cover_Raw_Probability_Tall-Shrubs': 0.0,
        'Land_Cover_Raw_Probability_Tall-Shrubs-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Trees': 0.0,
        'Land_Cover_Raw_Probability_Water': 0.0,
        'Land_Use': 0.0,
        'Land_Use_Raw_Probability_Agriculture': 0.0,
        'Land_Use_Raw_Probability_Developed': 0.0,
        'Land_Use_Raw_Probability_Forest': 0.0,
        'Land_Use_Raw_Probability_Non-Forest-Wetland': 0.0,
        'Land_Use_Raw_Probability_Other': 0.0,
        'Land_Use_Raw_Probability_Rangeland-or-Pasture': 0.0,
        'QA_Bits': 0.0
    },
    'USFS/GTAC/LCMS/v2021-7': {
        'Change': 0.0,
        'Change_Raw_Probability_Fast-Loss': 0.0,
        'Change_Raw_Probability_Gain': 0.0,
        'Change_Raw_Probability_Slow-Loss': 0.0,
        'Land_Cover': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Grass-Forb-Herb-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Shrubs-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Barren-or-Impervious': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Shrubs-Mix': 0.0,
        'Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Shrubs': 0.0,
        'Land_Cover_Raw_Probability_Shrubs-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Snow-or-Ice': 0.0,
        'Land_Cover_Raw_Probability_Tall-Shrubs': 0.0,
        'Land_Cover_Raw_Probability_Tall-Shrubs-and-Trees-Mix': 0.0,
        'Land_Cover_Raw_Probability_Trees': 0.0,
        'Land_Cover_Raw_Probability_Water': 0.0,
        'Land_Use': 0.0,
        'Land_Use_Raw_Probability_Agriculture': 0.0,
        'Land_Use_Raw_Probability_Developed': 0.0,
        'Land_Use_Raw_Probability_Forest': 0.0,
        'Land_Use_Raw_Probability_Non-Forest-Wetland': 0.0,
        'Land_Use_Raw_Probability_Other': 0.0,
        'Land_Use_Raw_Probability_Rangeland-or-Pasture': 0.0,
        'QA_Bits': 0.0
    },
    'USFS/GTAC/MTBS/annual_burn_severity_mosaics/v1': {
        'Severity': 0.0
    },
    'USGS/3DEP/10m': {
        'elevation': 0.0
    },
    'USGS/3DEP/1m': {
        'elevation': 0.0
    },
    'USGS/GAP/AK/2001': {
        'landcover': 0.0
    },
    'USGS/GAP/CONUS/2011': {
        'landcover': 0.0
    },
    'USGS/GAP/HI/2001': {
        'landcover': 0.0
    },
    'USGS/GAP/PR/2001': {
        'landcover': 0.0
    },
    'USGS/GFSAD1000_V0': {
        'landcover': 0.0
    },
    'USGS/GFSAD1000_V1': {
        'landcover': 0.0
    },
    'USGS/GMTED2010': {
        'be75': 0.0
    },
    'USGS/GTOPO30': {
        'elevation': 0.0
    },
    'USGS/LIMA/MOSAIC': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0
    },
    'USGS/LIMA/SR': {
        'B1': 0.0,
        'B2': 0.0,
        'B3': 0.0,
        'B4': 0.0,
        'B5': 0.0,
        'B7': 0.0,
        'B8': 0.0
    },
    'USGS/NED': {
        'elevation': 0.0
    },
    'USGS/NLCD': {
        'impervious': 0.0,
        'impervious_descriptor': 0.0,
        'landcover': 0.0,
        'percent_tree_cover': 0.0,
        'percent_tree_error': 0.0,
        'shrubland_annual_herbaceous': 0.0,
        'shrubland_bare_ground': 0.0,
        'shrubland_big_sagebrush': 0.0,
        'shrubland_herbaceous': 0.0,
        'shrubland_litter': 0.0,
        'shrubland_sagebrush': 0.0,
        'shrubland_sagebrush_height': 0.0,
        'shrubland_shrub': 0.0,
        'shrubland_shrub_height': 0.0
    },
    'USGS/NLCD_RELEASES/2016_REL': {
        'impervious': 0.0,
        'impervious_descriptor': 0.0,
        'landcover': 0.0,
        'percent_tree_cover': 0.0,
        'rangeland_annual_herbaceous': 0.0,
        'rangeland_bare_ground': 0.0,
        'rangeland_big_sagebrush': 0.0,
        'rangeland_herbaceous': 0.0,
        'rangeland_litter': 0.0,
        'rangeland_sagebrush': 0.0,
        'rangeland_sagebrush_height': 0.0,
        'rangeland_shrub': 0.0,
        'rangeland_shrub_height': 0.0,
        'urban_descriptor': 0.0
    },
    'USGS/NLCD_RELEASES/2019_REL/NLCD': {
        'impervious': 0.0,
        'impervious_descriptor': 0.0,
        'landcover': 0.0
    },
    'USGS/NLCD_RELEASES/2019_REL/RCMAP/V4/COVER': {
        'rangeland_annual_herbaceous': 0.0,
        'rangeland_bare_ground': 0.0,
        'rangeland_herbaceous': 0.0,
        'rangeland_litter': 0.0,
        'rangeland_non_sagebrush_shrub': 0.0,
        'rangeland_perennial_herbaceous': 0.0,
        'rangeland_sagebrush': 0.0,
        'rangeland_shrub': 0.0
    },
    'USGS/SRTMGL1_003': {
        'elevation': 0.0
    },
    'UTOKYO/WTLAB/KBDI/v1': {
        'KBDI': 0.0
    },
    'VITO/PROBAV/C1/S1_TOC_100M': {
        'BLUE': 0.0,
        'NDVI': 0.0,
        'NIR': 0.0,
        'RED': 0.0,
        'SAA': 0.0,
        'SM': 0.0,
        'SWIR': 0.0,
        'SWIRVAA': 0.0,
        'SWIRVZA': 0.0,
        'SZA': 0.0,
        'TIME': 0.0,
        'VNIRVAA': 0.0,
        'VNIRVZA': 0.0
    },
    'VITO/PROBAV/C1/S1_TOC_333M': {
        'BLUE': 0.0,
        'NDVI': 0.0,
        'NIR': 0.0,
        'RED': 0.0,
        'SAA': 0.0,
        'SM': 0.0,
        'SWIR': 0.0,
        'SWIRVAA': 0.0,
        'SWIRVZA': 0.0,
        'SZA': 0.0,
        'TIME': 0.0,
        'VNIRVAA': 0.0,
        'VNIRVZA': 0.0
    },
    'VITO/PROBAV/S1_TOC_100M': {
        'BLUE': 0.0,
        'NDVI': 0.0,
        'NIR': 0.0,
        'RED': 0.0,
        'SAA': 0.0,
        'SM': 0.0,
        'SWIR': 0.0,
        'SWIRVAA': 0.0,
        'SWIRVZA': 0.0,
        'SZA': 0.0,
        'TIME': 0.0,
        'VNIRVAA': 0.0,
        'VNIRVZA': 0.0
    },
    'VITO/PROBAV/S1_TOC_333M': {
        'BLUE': 0.0,
        'NDVI': 0.0,
        'NIR': 0.0,
        'RED': 0.0,
        'SAA': 0.0,
        'SM': 0.0,
        'SWIR': 0.0,
        'SWIRVAA': 0.0,
        'SWIRVZA': 0.0,
        'SZA': 0.0,
        'TIME': 0.0,
        'VNIRVAA': 0.0,
        'VNIRVZA': 0.0
    },
    'WCMC/biomass_carbon_density/v1_0': {
        'carbon_tonnes_per_ha': 0.0
    },
    'WHBU/NBAR_1YEAR': {
        'Nadir_Reflectance_Band1': 0.0,
        'Nadir_Reflectance_Band2': 0.0,
        'Nadir_Reflectance_Band3': 0.0,
        'Nadir_Reflectance_Band4': 0.0,
        'Nadir_Reflectance_Band5': 0.0,
        'Nadir_Reflectance_Band6': 0.0,
        'Nadir_Reflectance_Band7': 0.0
    },
    'WHBU/NBAR_2YEAR': {
        'Nadir_Reflectance_Band1': 0.0,
        'Nadir_Reflectance_Band2': 0.0,
        'Nadir_Reflectance_Band3': 0.0,
        'Nadir_Reflectance_Band4': 0.0,
        'Nadir_Reflectance_Band5': 0.0,
        'Nadir_Reflectance_Band6': 0.0,
        'Nadir_Reflectance_Band7': 0.0
    },
    'WHBU/NBAR_3YEAR': {
        'Nadir_Reflectance_Band1': 0.0,
        'Nadir_Reflectance_Band2': 0.0,
        'Nadir_Reflectance_Band3': 0.0,
        'Nadir_Reflectance_Band4': 0.0,
        'Nadir_Reflectance_Band5': 0.0,
        'Nadir_Reflectance_Band6': 0.0,
        'Nadir_Reflectance_Band7': 0.0
    },
    'WHRC/biomass/tropical': {
        'Mg': 0.0
    },
    'WORLDCLIM/V1/BIO': {
        'bio01': 0.0,
        'bio02': 0.0,
        'bio03': 0.0,
        'bio04': 0.0,
        'bio05': 0.0,
        'bio06': 0.0,
        'bio07': 0.0,
        'bio08': 0.0,
        'bio09': 0.0,
        'bio10': 0.0,
        'bio11': 0.0,
        'bio12': 0.0,
        'bio13': 0.0,
        'bio14': 0.0,
        'bio15': 0.0,
        'bio16': 0.0,
        'bio17': 0.0,
        'bio18': 0.0,
        'bio19': 0.0
    },
    'WORLDCLIM/V1/MONTHLY': {
        'prec': 0.0,
        'tavg': 0.0,
        'tmax': 0.0,
        'tmin': 0.0
    },
    'WRI/GFW/FORMA/alerts': {
        'alert_date': 0.0,
        'alert_delta': 0.0
    },
    'WRI/GFW/FORMA/raw_output_firms': {
        'delta_nday': 0.0,
        'nday': 0.0,
        'near_term_delta_nday': 0.0
    },
    'WRI/GFW/FORMA/raw_output_ndvi': {
        'accuracy': 0.0,
        'clearing': 0.0,
        'delta': 0.0,
        'near_term_delta': 0.0
    },
    'WRI/GFW/FORMA/thresholds': {
        'delta_bound': 0.0
    },
    'WRI/GFW/FORMA/vegetation_tstats': {
        'tstat_r': 0.0
    },
    'WWF/HydroSHEDS/03CONDEM': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/03DIR': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/03VFDEM': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/15ACC': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/15CONDEM': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/15DIR': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/30ACC': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/30CONDEM': {
        'b1': 0.0
    },
    'WWF/HydroSHEDS/30DIR': {
        'b1': 0.0
    },
    'WorldPop/GP/100m/pop': {
        'population': 0.0
    },
    'WorldPop/GP/100m/pop_age_sex': {
        'F_0': 0.0,
        'F_1': 0.0,
        'F_10': 0.0,
        'F_15': 0.0,
        'F_20': 0.0,
        'F_25': 0.0,
        'F_30': 0.0,
        'F_35': 0.0,
        'F_40': 0.0,
        'F_45': 0.0,
        'F_5': 0.0,
        'F_50': 0.0,
        'F_55': 0.0,
        'F_60': 0.0,
        'F_65': 0.0,
        'F_70': 0.0,
        'F_75': 0.0,
        'F_80': 0.0,
        'M_0': 0.0,
        'M_1': 0.0,
        'M_10': 0.0,
        'M_15': 0.0,
        'M_20': 0.0,
        'M_25': 0.0,
        'M_30': 0.0,
        'M_35': 0.0,
        'M_40': 0.0,
        'M_45': 0.0,
        'M_5': 0.0,
        'M_50': 0.0,
        'M_55': 0.0,
        'M_60': 0.0,
        'M_65': 0.0,
        'M_70': 0.0,
        'M_75': 0.0,
        'M_80': 0.0,
        'population': 0.0
    },
    'WorldPop/GP/100m/pop_age_sex_cons_unadj': {
        'F_0': 0.0,
        'F_1': 0.0,
        'F_10': 0.0,
        'F_15': 0.0,
        'F_20': 0.0,
        'F_25': 0.0,
        'F_30': 0.0,
        'F_35': 0.0,
        'F_40': 0.0,
        'F_45': 0.0,
        'F_5': 0.0,
        'F_50': 0.0,
        'F_55': 0.0,
        'F_60': 0.0,
        'F_65': 0.0,
        'F_70': 0.0,
        'F_75': 0.0,
        'F_80': 0.0,
        'M_0': 0.0,
        'M_1': 0.0,
        'M_10': 0.0,
        'M_15': 0.0,
        'M_20': 0.0,
        'M_25': 0.0,
        'M_30': 0.0,
        'M_35': 0.0,
        'M_40': 0.0,
        'M_45': 0.0,
        'M_5': 0.0,
        'M_50': 0.0,
        'M_55': 0.0,
        'M_60': 0.0,
        'M_65': 0.0,
        'M_70': 0.0,
        'M_75': 0.0,
        'M_80': 0.0,
        'population': 0.0
    },
    'WorldPop/POP': {
        'population': 0.0
    },
    'YALE/YCEO/UHI/Summer_UHI_yearly_pixel/v4': {
        'Daytime': 0.0,
        'Nighttime': 0.0
    },
    'YALE/YCEO/UHI/UHI_all_averaged/v4': {
        'all_daytime_UHI': 0.0,
        'all_nighttime_UHI': 0.0,
        'summer_daytime_UHI': 0.0,
        'summer_nighttime_UHI': 0.0,
        'winter_daytime_UHI': 0.0,
        'winter_nighttime_UHI': 0.0
    },
    'YALE/YCEO/UHI/UHI_monthly_averaged/v4': {
        'Apr_day_UHI': 0.0,
        'Apr_night_UHI': 0.0,
        'Aug_day_UHI': 0.0,
        'Aug_night_UHI': 0.0,
        'Dec_day_UHI': 0.0,
        'Dec_night_UHI': 0.0,
        'Feb_day_UHI': 0.0,
        'Feb_night_UHI': 0.0,
        'Jan_day_UHI': 0.0,
        'Jan_night_UHI': 0.0,
        'Jul_day_UHI': 0.0,
        'Jul_night_UHI': 0.0,
        'Jun_day_UHI': 0.0,
        'Jun_night_UHI': 0.0,
        'Mar_day_UHI': 0.0,
        'Mar_night_UHI': 0.0,
        'May_day_UHI': 0.0,
        'May_night_UHI': 0.0,
        'Nov_day_UHI': 0.0,
        'Nov_night_UHI': 0.0,
        'Oct_day_UHI': 0.0,
        'Oct_night_UHI': 0.0,
        'Sep_day_UHI': 0.0,
        'Sep_night_UHI': 0.0
    },
    'YALE/YCEO/UHI/UHI_yearly_averaged/v4': {
        'Daytime': 0.0,
        'Nighttime': 0.0
    },
    'YALE/YCEO/UHI/UHI_yearly_pixel/v4': {
        'Daytime': 0.0,
        'Nighttime': 0.0
    },
    'YALE/YCEO/UHI/Winter_UHI_yearly_pixel/v4': {
        'Daytime': 0.0,
        'Nighttime': 0.0
    },
    'projects/planet-nicfi/assets/basemaps/africa': {
        'B': 0.0,
        'G': 0.0,
        'NIR': 0.0,
        'R': 0.0
    },
    'projects/planet-nicfi/assets/basemaps/americas': {
        'B': 0.0,
        'G': 0.0,
        'NIR': 0.0,
        'R': 0.0
    },
    'projects/planet-nicfi/assets/basemaps/asia': {
        'B': 0.0,
        'G': 0.0,
        'NIR': 0.0,
        'R': 0.0
    }
};

/*
=======
Exports
=======
*/

exports.offsetParams = offsetParams;