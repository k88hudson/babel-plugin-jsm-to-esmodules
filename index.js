const BASE_PATH = /^resource:\/\//

function transformImportPaths(filepath, basepath = BASE_PATH) {
  return filepath.replace(basepath, "");
}

function replaceExport(types, path) {
  if (
    path.node.expression.left &&
    path.node.expression.left.object &&
    path.node.expression.left.object.type === "ThisExpression" &&
    path.node.expression.left.property.name === "EXPORTED_SYMBOLS"
  ) {
    const names = path.node.expression.right.elements.map(el => {
      const id = types.identifier(el.value);
      const spec = types.exportSpecifier(id, id);
      return spec;
    });
    path.replaceWith(types.exportNamedDeclaration(null, names));
  }
}

function replaceImport(types, path, options) {
  const expr = path.node.declarations[0].init;
  if (!path.node.declarations[0].id.properties) return;
  const keys = path.node.declarations[0].id.properties.map(prop => prop.key);
  if (
    expr.callee.object &&
    expr.callee.object.object &&
    expr.callee.object.object.name === "Components" &&
    expr.callee.object.property &&
    expr.callee.object.property.name === "utils" &&
    expr.callee.property &&
    expr.callee.property.name === "import"
  ) {
    const filepath = transformImportPaths(expr.arguments[0].value, options.basePath);
    path.replaceWith(types.importDeclaration(keys.map(k => types.importSpecifier(k, k)), types.stringLiteral(filepath)));
  }
}

module.exports = function plugin({types}) {
  return {
    visitor: {
      ExpressionStatement(path) {
        replaceExport(types, path);
      },
      VariableDeclaration(path, state) {
        replaceImport(types, path, state.opts);
      }
    }
  }
};
