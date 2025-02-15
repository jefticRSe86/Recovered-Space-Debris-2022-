ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-184.257445, -134.518279, 193.742555, 120.479172]);
var wms_layers = [];

var lyr_NASA_Population_Density_2020_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NASA_Population_Density_2020<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NASA_Population_Density_2020_0.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [-180.000000, -90.000000, 180.000000, 90.000000]
        })
    });
var format_RecoveredDebris_1 = new ol.format.GeoJSON();
var features_RecoveredDebris_1 = format_RecoveredDebris_1.readFeatures(json_RecoveredDebris_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RecoveredDebris_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecoveredDebris_1.addFeatures(features_RecoveredDebris_1);
var lyr_RecoveredDebris_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecoveredDebris_1, 
                style: style_RecoveredDebris_1,
                popuplayertitle: 'Recovered Debris',
                interactive: true,
                title: '<img src="styles/legend/RecoveredDebris_1.png" /> Recovered Debris'
            });

lyr_NASA_Population_Density_2020_0.setVisible(true);lyr_RecoveredDebris_1.setVisible(true);
var layersList = [lyr_NASA_Population_Density_2020_0,lyr_RecoveredDebris_1];
lyr_RecoveredDebris_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Satcat ID': 'Satcat ID', 'Name': 'Name', 'Reentry Date': 'Reentry Date', 'Material': 'Material', 'Place': 'Place', });
lyr_RecoveredDebris_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Satcat ID': 'Range', 'Name': 'TextEdit', 'Reentry Date': 'TextEdit', 'Material': 'TextEdit', 'Place': 'TextEdit', });
lyr_RecoveredDebris_1.set('fieldLabels', {'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Satcat ID': 'hidden field', 'Name': 'inline label - always visible', 'Reentry Date': 'inline label - always visible', 'Material': 'inline label - always visible', 'Place': 'inline label - always visible', });
lyr_RecoveredDebris_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});