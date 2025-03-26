#!/bin/bash

# Svuota i file di output
> output_json.txt
> output_next.txt

# Funzione per scrivere contenuto in un file
scrivi_contenuto() {
    file="$1"
    destinazione="$2"
    echo "====== $file ======" >> "$destinazione"
    cat "$file" >> "$destinazione"
    echo -e "\n" >> "$destinazione"
}

# Escludi node_modules e .next, prendi solo i .json
find . \( -path "./node_modules" -o -path "./.next" \) -prune -o -type f -name "*.json" -print | while read file; do
    scrivi_contenuto "$file" "output_json.txt"
done

# Ora trova ts, tsx, css, mjs (escludendo node_modules e .next)
find . \( -path "./node_modules" -o -path "./.next" \) -prune -o -type f \
  \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" -o -name "*.mjs" \) -print | while read file; do
    scrivi_contenuto "$file" "output_next.txt"
done

echo "✅ File estratti in output_json.txt e output_next.txt"
