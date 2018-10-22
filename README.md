A simple Barcodescanner which can scan an interleaved2of5 barcode and open a webpage with predefined templatestrings.

Templates must contain
```%barcode%```

# example templateString
```http://www.google.de/id-%barcode%```

This will open the Browserview with the given URL and the replaced barcode like

``````http://www.google.de/id-123456``````
