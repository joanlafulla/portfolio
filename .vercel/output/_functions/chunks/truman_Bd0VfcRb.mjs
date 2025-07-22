const truman = new Proxy({"src":"/_astro/truman.BZh_wVG0.webp","width":221,"height":303,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/truman.webp";
							}
							
							return target[name];
						}
					});

export { truman as default };
