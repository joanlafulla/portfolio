const me_looking_up_4 = new Proxy({"src":"/_astro/me_looking_up_4.BbyxrSzG.png","width":280,"height":389,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/me_looking_up_4.png";
							}
							
							return target[name];
						}
					});

export { me_looking_up_4 as default };
