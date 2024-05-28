var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_Marche_matinaletracks_1 = new ol.format.GeoJSON();
var features_Marche_matinaletracks_1 = format_Marche_matinaletracks_1.readFeatures(json_Marche_matinaletracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_matinaletracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_matinaletracks_1.addFeatures(features_Marche_matinaletracks_1);
var lyr_Marche_matinaletracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_matinaletracks_1, 
                style: style_Marche_matinaletracks_1,
                interactive: true,
                title: '<img src="styles/legend/Marche_matinaletracks_1.png" /> Marche_matinale — tracks'
            });
var format_pointoiseaux_2 = new ol.format.GeoJSON();
var features_pointoiseaux_2 = format_pointoiseaux_2.readFeatures(json_pointoiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointoiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointoiseaux_2.addFeatures(features_pointoiseaux_2);
var lyr_pointoiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointoiseaux_2, 
                style: style_pointoiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/pointoiseaux_2.png" /> point oiseaux'
            });
var format_zonecologique_3 = new ol.format.GeoJSON();
var features_zonecologique_3 = format_zonecologique_3.readFeatures(json_zonecologique_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonecologique_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonecologique_3.addFeatures(features_zonecologique_3);
var lyr_zonecologique_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonecologique_3, 
                style: style_zonecologique_3,
                interactive: true,
                title: '<img src="styles/legend/zonecologique_3.png" /> zone écologique'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_Marche_matinaletracks_1.setVisible(true);lyr_pointoiseaux_2.setVisible(true);lyr_zonecologique_3.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_Marche_matinaletracks_1,lyr_pointoiseaux_2,lyr_zonecologique_3];
lyr_Marche_matinaletracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_pointoiseaux_2.set('fieldAliases', {'Nom': 'Nom', 'Nombre': 'Nombre', 'certitude': 'certitude', 'typ-contac': 'typ-contac', });
lyr_zonecologique_3.set('fieldAliases', {'nb-sp-arbr': 'nb-sp-arbr', 'nb-strat': 'nb-strat', 'fleurs': 'fleurs', 'b-mort': 'b-mort', 'eau': 'eau', 'fruits': 'fruits', 'z-herbe': 'z-herbe', });
lyr_Marche_matinaletracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_pointoiseaux_2.set('fieldImages', {'Nom': '', 'Nombre': '', 'certitude': '', 'typ-contac': '', });
lyr_zonecologique_3.set('fieldImages', {'nb-sp-arbr': '', 'nb-strat': '', 'fleurs': '', 'b-mort': '', 'eau': '', 'fruits': '', 'z-herbe': '', });
lyr_Marche_matinaletracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_pointoiseaux_2.set('fieldLabels', {'Nom': 'no label', 'Nombre': 'no label', 'certitude': 'no label', 'typ-contac': 'no label', });
lyr_zonecologique_3.set('fieldLabels', {'nb-sp-arbr': 'inline label', 'nb-strat': 'inline label', 'fleurs': 'inline label', 'b-mort': 'inline label', 'eau': 'inline label', 'fruits': 'inline label', 'z-herbe': 'inline label', });
lyr_zonecologique_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});