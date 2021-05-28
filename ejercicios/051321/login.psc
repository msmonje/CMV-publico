Proceso login
	// Proceso de login desde el navegador
	recuperar información de estado de la sesión
	Si sesion iniciada? Entonces
		adaptar visualización a modo con sesión
		operar normalmente la página
		Leer desconectar
		cerrar la sesión
		sesionIniciada = falso
	SiNo
		adaptar visualización a modo SIN sesió
		operar normalmente la página
		Leer usr, psw
		Comprobar en el servidor
		Si aceptada? Entonces
			sesionIniciada = verdadero
		SiNo
			sesionIniciada = falso
		FinSi
	FinSi
	// Recargar para que compruebe si hay conexión o no.
	recargar página
FinProceso
