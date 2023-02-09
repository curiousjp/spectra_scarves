function colouriseRainbow( nm ) {
	var r = 0;
	var g = 0;
	var b = 0;

	if( nm >= 380 && nm < 420 ) {
		r = 0.5; b = 1.0;
	}
	else if( nm >= 420 && nm < 440 ) {
		r = 0.3; b = 0.5;
	}
	else if( nm >= 440 && nm < 520 ) {
		b = 1.0;
	}
	else if( nm >= 520 && nm < 570 ) {
		g = 1.0;
	}
	else if( nm >= 570 && nm < 585 ) {
		r = 1.0;
		g = 0.5;
	}
	else if( nm >= 585 && nm < 630 ) {
		r = 1.0;
		g = 0.5;
	}
	else if( nm >= 630 && nm < 740 ) {
		r = 1.0;
	}
	return [r,g,b];
};
