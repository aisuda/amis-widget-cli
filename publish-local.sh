#!/bin/bash
set -e

echo "$0";
echo "$1";

rm -rf npm
mkdir npm

cp package.json npm

cp -rf src npm
cp -rf bin npm

cd npm

sed -i '' -e 's/\"name\": \"amis-widget-cli\"/\"name\": \"@fex\/amis-widget-cli\"/g' ./package.json
sed -i '' -e 's/\"amis-editor\":/\"@fex\/amis-editor\":/g' ./package.json
sed -i '' -e 's/\"amis\":/\"@fex\/amis\":/g' ./package.json

for f in $(find ./src -name "*.js"); do
  sed -i '' -e "s/from \'amis/from \'@fex\/amis/g" $f
  sed -i '' -e "s/from \'amis-editor/from \'@fex\/amis-editor/g" $f
  sed -i '' -e "s/from \'amis-widget/from \'@fex\/amis-widget/g" $f
  sed -i '' -e "s/import \'amis/import \'@fex\/amis/g" $f
  sed -i '' -e "s/import \'amis-editor/import \'@fex\/amis-editor/g" $f
  sed -i '' -e "s/import \'amis-widget/import \'@fex\/amis-widget/g" $f
done

for f in $(find ./src -name "*.tsx"); do
  sed -i '' -e "s/from \'amis/from \'@fex\/amis/g" $f
  sed -i '' -e "s/from \'amis-editor/from \'@fex\/amis-editor/g" $f
  sed -i '' -e "s/from \'amis-widget/from \'@fex\/amis-widget/g" $f
  sed -i '' -e "s/import \'amis/import \'@fex\/amis/g" $f
  sed -i '' -e "s/import \'amis-editor/import \'@fex\/amis-editor/g" $f
  sed -i '' -e "s/import \'amis-widget/import \'@fex\/amis-widget/g" $f
done

for f in $(find ./src -name "*.jsx"); do
  sed -i '' -e "s/from \'amis/from \'@fex\/amis/g" $f
  sed -i '' -e "s/from \'amis-editor/from \'@fex\/amis-editor/g" $f
  sed -i '' -e "s/from \'amis-widget/from \'@fex\/amis-widget/g" $f
  sed -i '' -e "s/import \'amis/import \'@fex\/amis/g" $f
  sed -i '' -e "s/import \'amis-editor/import \'@fex\/amis-editor/g" $f
  sed -i '' -e "s/import \'amis-widget/import \'@fex\/amis-widget/g" $f
done

npm publish --registry=http://registry.npm.baidu-int.com

cd ..
# rm -rf npm