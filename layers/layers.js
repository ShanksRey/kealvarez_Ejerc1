ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8142695.806164, -4413244.799374, -8131494.280041, -4405666.293496]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_casa_punto_1 = new ol.format.GeoJSON();
var features_casa_punto_1 = format_casa_punto_1.readFeatures(json_casa_punto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_punto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_punto_1.addFeatures(features_casa_punto_1);
var lyr_casa_punto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casa_punto_1, 
                style: style_casa_punto_1,
                popuplayertitle: 'casa_punto',
                interactive: true,
                title: '<img src="styles/legend/casa_punto_1.png" /> casa_punto'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_casa_punto_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_casa_punto_1];
lyr_casa_punto_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunt': 'T_Pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'video': 'video', });
lyr_casa_punto_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'video': 'TextEdit', });
lyr_casa_punto_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_Pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - always visible', 'Porc_Inc': 'inline label - always visible', 'video': 'inline label - always visible', });
lyr_casa_punto_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});