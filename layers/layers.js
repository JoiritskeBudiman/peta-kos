var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DataKos_1 = new ol.format.GeoJSON();
var features_DataKos_1 = format_DataKos_1.readFeatures(json_DataKos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataKos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataKos_1.addFeatures(features_DataKos_1);
var lyr_DataKos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataKos_1, 
                style: style_DataKos_1,
                popuplayertitle: 'DataKos',
                interactive: true,
                title: '<img src="styles/legend/DataKos_1.png" /> DataKos'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DataKos_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DataKos_1];
lyr_DataKos_1.set('fieldAliases', {'id': 'id', 'nama_kos': 'nama_kos', 'alamat': 'alamat', 'harga_sewa': 'harga_sewa', 'fasilitas': 'fasilitas', 'no_kontak': 'no_kontak', 'tipe_kos': 'tipe_kos', 'kapasitas': 'kapasitas', });
lyr_DataKos_1.set('fieldImages', {'id': 'TextEdit', 'nama_kos': 'TextEdit', 'alamat': 'TextEdit', 'harga_sewa': 'TextEdit', 'fasilitas': 'TextEdit', 'no_kontak': 'TextEdit', 'tipe_kos': 'TextEdit', 'kapasitas': 'TextEdit', });
lyr_DataKos_1.set('fieldLabels', {'id': 'no label', 'nama_kos': 'header label - visible with data', 'alamat': 'inline label - visible with data', 'harga_sewa': 'inline label - visible with data', 'fasilitas': 'inline label - visible with data', 'no_kontak': 'inline label - visible with data', 'tipe_kos': 'inline label - visible with data', 'kapasitas': 'inline label - visible with data', });
lyr_DataKos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});