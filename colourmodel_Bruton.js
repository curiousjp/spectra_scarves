function colouriseBruton( nm ) {
	// evolved out of http://codingmess.blogspot.com/2009/05/conversion-of-wavelength-in-nanometers.html
	var r = 0;
	var g = 0;
	var b = 0;
	var s = 0; // intensity correction

	if( nm >= 380 && nm < 440 ) {
		r = ( 440 - nm ) / 90;
		b = 1;
	}
	else if( nm >= 440 && nm < 490 ) {
		g = (nm - 440) / 50;
		b = 1;
	}
	else if( nm >= 490 && nm < 510 ) {
		g = 1;
		b = (510 - nm) / 20;
	}
	else if( nm >= 510 && nm < 580 ) {
		r = ( nm - 510 ) / 70;
		g = 1;
	}
	else if( nm >= 580 && nm < 645 ) {
		r = 1;
		g = ( 645 - nm ) / 65;
	}
	else if( nm >= 645 && nm < 780 ) {
		r = 1;
	}

	if( nm >= 380 && nm < 420 )
		s = 0.3 + 0.7 * ( nm - 350 ) / 70;
	else if( nm >= 420 && nm <= 700 )
		s = 1;
	else if( nm > 700 && nm <= 780 )
		s = 0.3 + 0.7 * ( 780 - nm ) / 80;
	else
		s = 0;

	r = r * s;
	g = g * s;
	b = b * s;
	return [r,g,b];
}
