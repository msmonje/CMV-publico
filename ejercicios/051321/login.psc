Proceso login
	// Proceso de login desde el navegador
	recuperar informaci�n de estado de la sesi�n
	Si sesion iniciada? Entonces
		adaptar visualizaci�n a modo con sesi�n
		operar normalmente la p�gina
		Leer desconectar
		cerrar la sesi�n
		sesionIniciada = falso
	SiNo
		adaptar visualizaci�n a modo SIN sesi�
		operar normalmente la p�gina
		Leer usr, psw
		Comprobar en el servidor
		Si aceptada? Entonces
			sesionIniciada = verdadero
		SiNo
			sesionIniciada = falso
		FinSi
	FinSi
	// Recargar para que compruebe si hay conexi�n o no.
	recargar p�gina
FinProceso
