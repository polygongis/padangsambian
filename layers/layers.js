var wms_layers = [];
var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> DesaIndonesia'
            });var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_1.addFeatures(features_jalan_1);var lyr_jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_1_0.png" /> jalan lokal<br />\
    <img src="styles/legend/jalan_1_1.png" /> lokal<br />\
    <img src="styles/legend/jalan_1_2.png" /> utama<br />\
    <img src="styles/legend/jalan_1_3.png" /> <br />'
        });var format_rumah_2 = new ol.format.GeoJSON();
var features_rumah_2 = format_rumah_2.readFeatures(json_rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumah_2.addFeatures(features_rumah_2);var lyr_rumah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rumah_2, 
                style: style_rumah_2,
    title: 'rumah<br />\
    <img src="styles/legend/rumah_2_0.png" /> alfamart<br />\
    <img src="styles/legend/rumah_2_1.png" /> Balai Desa Padangsambian<br />\
    <img src="styles/legend/rumah_2_2.png" /> depstore<br />\
    <img src="styles/legend/rumah_2_3.png" /> grand kesambi<br />\
    <img src="styles/legend/rumah_2_4.png" /> guest house<br />\
    <img src="styles/legend/rumah_2_5.png" /> hotel<br />\
    <img src="styles/legend/rumah_2_6.png" /> hyundai<br />\
    <img src="styles/legend/rumah_2_7.png" /> indomaret<br />\
    <img src="styles/legend/rumah_2_8.png" /> kos<br />\
    <img src="styles/legend/rumah_2_9.png" /> morodadi jaya<br />\
    <img src="styles/legend/rumah_2_10.png" /> optik<br />\
    <img src="styles/legend/rumah_2_11.png" /> padi mas<br />\
    <img src="styles/legend/rumah_2_12.png" /> pom<br />\
    <img src="styles/legend/rumah_2_13.png" /> RS<br />\
    <img src="styles/legend/rumah_2_14.png" /> rumah warga<br />\
    <img src="styles/legend/rumah_2_15.png" /> sharp<br />\
    <img src="styles/legend/rumah_2_16.png" /> ud sinar<br />\
    <img src="styles/legend/rumah_2_17.png" /> villa<br />\
    <img src="styles/legend/rumah_2_18.png" /> <br />'
        });var format_BALAIDESAPADANGKAJA_3 = new ol.format.GeoJSON();
var features_BALAIDESAPADANGKAJA_3 = format_BALAIDESAPADANGKAJA_3.readFeatures(json_BALAIDESAPADANGKAJA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BALAIDESAPADANGKAJA_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BALAIDESAPADANGKAJA_3.addFeatures(features_BALAIDESAPADANGKAJA_3);var lyr_BALAIDESAPADANGKAJA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BALAIDESAPADANGKAJA_3, 
                style: style_BALAIDESAPADANGKAJA_3,
                title: '<img src="styles/legend/BALAIDESAPADANGKAJA_3.png" /> BALAI DESA PADANGKAJA'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_rumah_2.setVisible(true);lyr_BALAIDESAPADANGKAJA_3.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_jalan_1,lyr_rumah_2,lyr_BALAIDESAPADANGKAJA_3];
lyr_DesaIndonesia_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', 'foto': 'foto', });
lyr_jalan_1.set('fieldAliases', {'id': 'id', 'nama_jln': 'nama_jln', 'jenis_jln': 'jenis_jln', });
lyr_rumah_2.set('fieldAliases', {'id': 'id', 'rumah': 'rumah', 'foto': 'foto', });
lyr_BALAIDESAPADANGKAJA_3.set('fieldAliases', {'NO': 'NO', 'EAST (E/X)': 'EAST (E/X)', 'SOUTH (S/Y)': 'SOUTH (S/Y)', 'NAMA TEMPAT': 'NAMA TEMPAT', 'KET': 'KET', });
lyr_DesaIndonesia_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', 'foto': 'TextEdit', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', 'nama_jln': 'TextEdit', 'jenis_jln': 'TextEdit', });
lyr_rumah_2.set('fieldImages', {'id': 'TextEdit', 'rumah': 'TextEdit', 'foto': 'Photo', });
lyr_BALAIDESAPADANGKAJA_3.set('fieldImages', {'NO': 'TextEdit', 'EAST (E/X)': 'TextEdit', 'SOUTH (S/Y)': 'TextEdit', 'NAMA TEMPAT': 'TextEdit', 'KET': 'TextEdit', });
lyr_DesaIndonesia_0.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', 'foto': 'no label', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', 'nama_jln': 'inline label', 'jenis_jln': 'inline label', });
lyr_rumah_2.set('fieldLabels', {'id': 'no label', 'rumah': 'no label', 'foto': 'no label', });
lyr_BALAIDESAPADANGKAJA_3.set('fieldLabels', {'NO': 'no label', 'EAST (E/X)': 'no label', 'SOUTH (S/Y)': 'no label', 'NAMA TEMPAT': 'no label', 'KET': 'no label', });
lyr_BALAIDESAPADANGKAJA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});