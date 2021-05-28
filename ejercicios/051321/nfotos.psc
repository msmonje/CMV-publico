Proceso fotos
	Escribir "dime cuantas fotos quieres"
	Leer nroPedido
	fotosImpresas <- 0
	foto = buscarfoto()
	Mientras 	foto ==verdadero Y FotosImpresas< NroPedido Hacer
		Escribir foto
		fotosImpresas <- fotosImpresas + 1
		foto = buscarfoto()
	FinMientras
FinProceso
