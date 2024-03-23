import gimpfu

image_width = 3840.0

def scale_layers(image):
	for layer in image.layers:
		ratio = image_width / layer.width
		new_height = int(layer.height * ratio)
		pdb.gimp_layer_scale(layer, int(image_width), new_height, True)

image = gimp.image_list()[0]
scale_layers(image)