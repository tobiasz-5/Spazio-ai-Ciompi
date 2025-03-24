#!/bin/bash

# Impostazioni
max_lines=2000       # massimo numero di righe per file di output
file_index=1         # indice del file di output corrente
current_count=0      # contatore righe nel file corrente
output_file="output_json${file_index}.txt"

# Rimuove eventuali file di output preesistenti
rm -f output_json*.txt

# Funzione per scrivere una riga controllando il limite
write_line() {
    local line="$1"
    # Se scrivere una nuova riga supererebbe il limite, passa al file successivo
    if (( current_count + 1 > max_lines )); then
        file_index=$((file_index+1))
        output_file="output_json${file_index}.txt"
        current_count=0
    fi
    echo "$line" >> "$output_file"
    current_count=$((current_count+1))
}

# Trova tutti i file .json escludendo le cartelle node_modules e .next,
# e li processa riga per riga nel flusso principale (senza pipe per non usare subshell)
while IFS= read -r file; do
    # Scrive l'intestazione con il percorso del file
    write_line "====== $file ======"
    # Legge il file JSON riga per riga
    while IFS= read -r line; do
        write_line "$line"
    done < "$file"
    # Scrive una riga vuota come separatore dopo ogni file
    write_line ""
done < <(find . \( -path "./node_modules" -o -path "./.next" \) -prune -o -type f -name "*.json" -print)

echo "✅ JSON files estratti in output_json{N}.txt (max 2000 righe ciascuno)"
