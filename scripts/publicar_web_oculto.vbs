Rem Lanza publicar_web.cmd sin abrir ventana (lo usa la tarea programada «IEBIL actualizar web»).
Set fso = CreateObject("Scripting.FileSystemObject")
carpeta = fso.GetParentFolderName(WScript.ScriptFullName)
CreateObject("WScript.Shell").Run """" & carpeta & "\publicar_web.cmd""", 0, True
