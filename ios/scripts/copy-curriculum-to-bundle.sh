#!/bin/bash
# Copies repo Input/ into the app bundle so CurriculumService can seed on first launch.
set -e
SRC="${SRCROOT}/../Input"
DEST="${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/Input"
if [ -d "$SRC" ]; then
  echo "Copying curriculum Input to app bundle..."
  rm -rf "$DEST"
  mkdir -p "$(dirname "$DEST")"
  cp -R "$SRC" "$DEST"
else
  echo "warning: Input folder not found at ${SRC} — curriculum will be unavailable"
fi
