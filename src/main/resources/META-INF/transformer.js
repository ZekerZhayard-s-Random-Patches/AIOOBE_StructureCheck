var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");

function initializeCoreMod() {
    return {
        "StructureCheck_<init>": {
            "target": {
                "type": "METHOD",
                "class": "net/minecraft/world/level/levelgen/structure/StructureCheck",
                "methodName": "<init>",
                "methodDesc": "(Lnet/minecraft/world/level/chunk/storage/ChunkScanAccess;Lnet/minecraft/core/RegistryAccess;Lnet/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager;Lnet/minecraft/resources/ResourceKey;Lnet/minecraft/world/level/chunk/ChunkGenerator;Lnet/minecraft/world/level/levelgen/RandomState;Lnet/minecraft/world/level/LevelHeightAccessor;Lnet/minecraft/world/level/biome/BiomeSource;JLcom/mojang/datafixers/DataFixer;)V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.PUTFIELD && node.owner.equals("net/minecraft/world/level/levelgen/structure/StructureCheck") && node.name.equals(ASMAPI.mapField("f_197247_")) && node.desc.equals("Lit/unimi/dsi/fastutil/longs/Long2ObjectMap;")) {
                        mn.instructions.insertBefore(node, new InsnNode(Opcodes.POP));
                        mn.instructions.insertBefore(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "io/github/zekerzhayard/aioobe_structurecheck/Long2ObjectConcurrentHashMap", "create", "()Lit/unimi/dsi/fastutil/longs/Long2ObjectMap;", false));
                    }
                }
                return mn;
            }
        }
    }
}
