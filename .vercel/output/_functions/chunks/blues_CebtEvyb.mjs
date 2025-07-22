const blues = new Proxy({"src":"/_astro/blues.DfwZEj4n.webp","width":221,"height":303,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/blues.webp";
							}
							
							return target[name];
						}
					});

export { blues as default };
